"use strict";

//check if user is signed in

if (JSON.parse(localStorage.getItem("username")) == null) {
	location.href = "login.html";
}

//logout button
let logoutBtn = document.querySelector(".logout-btn");
let logoutBtnName = document.querySelector(".username");
let signedidUsername = JSON.parse(localStorage.getItem("username"));
logoutBtnName.append(signedidUsername)
logoutBtn.addEventListener("click", () => {
	localStorage.removeItem("username");
	history.go(0);
})
//------------
let quizes = [];

class Quiz {
	constructor(id, title, description, count, timeout, questions) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.count = count;
		this.timeout = timeout;
		this.questions = questions;
	}
}

class QuizMaker {
	constructor() {
		this.render();
	}

	render() {
		let count;
		let tempCount;

		let countInput = document.querySelector("#create-quiz-count");
		countInput.addEventListener("change", () => {
			count = document.querySelector("#create-quiz-count").value;
			tempCount = count;
		});

		let qId = 1;
		let questions = [];
		let qAddBtn = document.querySelector("#question-add-btn");
		qAddBtn.addEventListener("click", (e) => {
			e.preventDefault();
			questions.push(this.creatQuestions(count, qId));
			count--;
			qId++;
			if (qId <= tempCount) {
				document.querySelector("#show-count").innerHTML = `${qId}.`;
			}

			/* empty values for next input*/
			document.querySelector("#create-quiz-question").value = "";
			document.querySelectorAll(".options").forEach((answer) => {
				answer.value = "";
			});
		});

		let title;
		let description;
		let timeout;
		let submitBtn = document.querySelector("#create-form-sumbit");
		submitBtn.addEventListener("click", (e) => {
			e.preventDefault();
			title = document.querySelector("#create-quiz-title").value;
			description = document.querySelector("#create-quiz-description").value;
			timeout = document.querySelector("#create-quiz-timeout").value;
			this.createTheQuiz(quizes.length, title, description, tempCount, timeout, questions);
			/* empty values for next input*/
			document.querySelector("#create-quiz-title").value = "";
			document.querySelector("#create-quiz-description").value = "";
			document.querySelector("#create-quiz-timeout").value = "";
			document.querySelector("#show-count").innerHTML = "1.";
		});
	}
	creatQuestions(count, id) {
		let qTitle;
		let options = [];
		let qCorrect;
		if (count > 0) {
			qTitle = document.querySelector("#create-quiz-question").value;
			let answers = document.querySelectorAll(".options");
			answers.forEach((answer) => {
				options.push(answer.value);
			});
			qCorrect = (function () {
				let correctOne;
				let options = document.querySelectorAll(".correctA");
				options.forEach((option) => {
					if (option.checked) {
						correctOne = option.getAttribute("id").slice(7);
					}
				});
				return correctOne;
			})();

			return { id: id, title: qTitle, options: options, correct: qCorrect };
		} else {
			alert(`Error: you have entered all your questions`);
		}
	}
	createTheQuiz(id, title, description, count, timeout, questions) {
		let newQuiz = new Quiz(id, title, description, count, timeout, questions);
		quizes.push(newQuiz);
		let quizMakerData = {
			id, title, description, count, timeout, questions
		}
		fetch('https://quiz-app-3ddff-default-rtdb.asia-southeast1.firebasedatabase.app/quizes.json', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(quizMakerData)
		})
			.then(res => {
				console.log(res);
				alert("your quiz added to quizes successfully")
			})
			.catch(err => {
				console.log(err);
				alert("there is a problem to add your quiz");
			})

	}
	
}

let q = new QuizMaker();

