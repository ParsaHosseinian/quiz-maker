"use strict";

//check if user is signed in

if (JSON.parse(localStorage.getItem("username")) == null) {
  location.href = "login.html";
}

//logout button
let logoutBtn = document.querySelector(".logout-btn");
let logoutBtnName = document.querySelector(".username");
let signedidUsername = JSON.parse(localStorage.getItem("username"));
logoutBtnName.append(signedidUsername);
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("username");
  history.go(0);
});
//------------

class QuizList {
  constructor(quizContainer) {
    this.quizContainer = quizContainer;
    this.generateQuizes();
  }
  async generateQuizes() {
    let iconSrc = "images/test-icon.png";
    let quizTitle;
    let quizes = [];
    await fetch(
      "https://quiz-app-3ddff-default-rtdb.asia-southeast1.firebasedatabase.app/quizes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        let quizesFromFirebase = Object.entries(data);
        quizesFromFirebase.forEach((quiz) => {
          quizes.push(quiz[1]);
        });
      });

    quizes.forEach((quiz) => {
      quizTitle = quiz.title;
      quizContainer.insertAdjacentHTML(
        "beforeend",
        `
				<div class="quiz-item">
				<div>
				<img class="quiz-item-icon" src=${iconSrc} alt="test icon" />
				<p class="quiz-item-title">${quizTitle}</p>
				</div>
				<a href="quiz.html#${quiz.id}"><button>Take quiz</button></a>
				</div>
            `
      );
    });
  }
}

let quizContainer = document.querySelector("#quiz-list");
let mainList = new QuizList(quizContainer);
