const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector("#login-btn");
const signupBtn = document.querySelector("#signup-btn");

signupBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (!usernameInput.value && !passwordInput.value) {
        alert("please enter all information");
    }
    else {
        let userRegisterData = {
            username: usernameInput.value,
            password: passwordInput.value
        }
        fetch('https://quiz-app-3ddff-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userRegisterData)
        })
            .then(res => {
                console.log(res);
                clearData();
                alert("you have been signed up successfuly, now you can log in")
            })
            .catch(err => console.log(err))
    }
})
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!usernameInput.value && !passwordInput.value) {
        alert("please enter all information");
    }
    else {
        let userRegisterData = {
            username: usernameInput.value,
            password: passwordInput.value
        }
        fetch('https://quiz-app-3ddff-default-rtdb.asia-southeast1.firebasedatabase.app/users.json')
            .then(res => res.json())
            .then(data => {
                let usersData = Object.entries(data);
                console.log(usersData);
                let isExist = false;
                usersData.forEach(user => {
                    if (user[1].username === usernameInput.value && user[1].password === passwordInput.value) {
                        localStorage.setItem("username", JSON.stringify(user[1].username));
                        isExist = true;
                        location.href = "main.html";
                    }
                })
                if(!isExist){
                    alert("no user with this information found!")
                }
            })
    }
})
function clearData() {
    usernameInput.value = "";
    passwordInput.value = "";
}