# QUIZ MAKER

#### Video Demo:

#### Description: https://youtu.be/-qmiAW4iERo

**Introduction:**

Quiz Maker is a web based app which allows people to create quizes and also take quizes which people create.
this app is just simply a take or make a quiz app to see how good people are in different quizes.

**Technologies added:**

-   HTML: to create the web structure with a markup language
-   CSS: to style the web structure and create the user interface
-   vanilla Javascript: for all the logics and programming of the web app
-   firebase: for user authentication and database

**Features:**

-   sign up / sign in / logout
-   create quize form
-   save the quizes to the database
-   list all the created quizes
-   take a quize
-   calculate the user score of the quize
-   quize timeout function

**Programming type:**

this web app is programmed with object oriented programming (OOP) with Javascript language

**Project file and folders:**

html files: html codes
There are four different html file for four pages for the web app including login page, main page, quiz page and the quizmaker page.
All pages are built based on their usage for this web app:

- login page:
 This page is actually the first page that every user sees by searching the domain of the web app on a browser; this page includes a form whitch this form contains two different input types, this form is actually designed for signing in the user; And there are two button for two kind of users: One for those who are not registered and one for those who are registered and they want to log in to this web app, quiz maker.
 > There is a feature that if the user was not registered and he/she wanted to open the main page or quiz page or quizmaker page directly with a link, the website sends he/she
 > to the login page so that now he/she must log in first.
- main page:
 This page appears after the user loged in successfully. At the top of the page we have a red button including the user's username and the feature of this button is that if the user click the button he/she will log out of web app and it sends him/her to the log in page again.
 In the middle of this main page there is a list of the quizes that are already created by other users or by admin.
 There is button for each quiz in the list that allows users to take the quiz by clicking on it.
 In the top of the list of the quizes there is a button that if any user wants to make a new quiz himself/herself, he/she can simply click on this button to move to the quiz maker page.
- quiz maker page:
 In this page we have a form to add all the datas needed to make a quiz.
 First of all we have to add the title of the quiz.
 Then we need to add a description to guide people who wants to take our quiz. It appears at the top of our quiz page under the title of the quiz.
 Then we have to add how many questions we want to make in our quiz and then we need to set a timeout for the quiz.
 Afterwards we need to add all the questions' datas and choose which is the correct answer and we add questions one by one.
 Eventually we submit the quiz along with all the datas we added.
 This quiz will be added to the quiz lists in main page.
- quiz page:
 If the user click on the take quiz button so that he/she will transfer from main page to quiz page including all the datas we added and talked about in the quiz maker page description.
 Here he/she that is taking the quiz, sees the questions very clearly.
 After answering questions and submit the answers,  the program calculates the score as a percentage.In the page that shows the score, we see a button that by clicking on it, it moves us to the homepage. That's it.
 

css files: external style sheets related to the html files
js files: all the logics written in javascript

images folder: this folder contains all the media used in this project
login js file: here it gets the user login form data and send it to firebase database using fetch api if the user click on the sign up button. if the user click on sign in it will send a request to find out if the user exist in the database or not, if so sign in the user.
main js file: here we have one class which is the quiz list. it will get the quiz data with fetch api from firebase database and pring all the quizes in the quiz list
quizmaker js file: here is where we create the quizes. we have a quiz class which represent a class and quizes are objects of this class. we have quizmaker class which will create a quiz object for quiz class from the data user given to the quiz maker form.

quiz js file: here we have a quiz class which it's job is to render the quiz for the user. it will generate the questions and track the timeout if the timeout is finished or the user submit the quiz it will calculate the score of the quiz and render the result to the user's screen.

**The process of the web app:**

- ***log in page process:***
 This page is actually the first page that every user sees by searching the domain of the web app on a browser; this page includes a form whitch this form contains two different input types, this form is actually designed for signing in the user; And there are two button for two kind of users: One for those who are not registered and one for those who are registered and they want to log in to this web app, quiz maker.
 > There is a feature that if the user was not registered and he/she wanted to open the main page or quiz page or quizmaker page directly with a link, the website sends he/she
 > to the login page so that now he/she must log in first.
- ***main page process:***
 This page appears after the user loged in successfully. At the top of the page we have a red button including the user's username and the feature of this button is that if the user click the button he/she will log out of web app and it sends him/her to the log in page again.
 In the middle of this main page there is a list of the quizes that are already created by other users or by admin.
 There is button for each quiz in the list that allows users to take the quiz by clicking on it.
 In the top of the list of the quizes there is a button that if any user wants to make a new quiz himself/herself, he/she can simply click on this button to move to the quiz maker page.
- ***quiz maker page process:***
 In this page we have a form to add all the datas needed to make a quiz.
 First of all we have to add the title of the quiz.
 Then we need to add a description to guide people who wants to take our quiz. It appears at the top of our quiz page under the title of the quiz.
 Then we have to add how many questions we want to make in our quiz and then we need to set a timeout for the quiz.
 Afterwards we need to add all the questions' datas and choose which is the correct answer and we add questions one by one.
 Eventually we submit the quiz along with all the datas we added.
 This quiz will be added to the quiz lists in main page.
- ***quiz page process:***
 If the user click on the take quiz button so that he/she will transfer from main page to quiz page including all the datas we added and talked about in the quiz maker page description.
 Here he/she that is taking the quiz, sees the questions very clearly.
 After answering questions and submit the answers,  the program calculates the score as a percentage.In the page that shows the score, we see a button that by clicking on it, it moves us to the homepage. That's it.