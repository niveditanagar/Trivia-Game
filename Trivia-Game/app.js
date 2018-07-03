//Global Variables:
var quesAndAns = [
    {
        question: "Who was the first Avenger?",
        ansChoices: ["Captain America", "Iron Man", "Thor", "Hulk"],
        correctAns: 0
    },

    {
        question: "What is the name of Thor's hammer?",
        ansChoices: ["Jarvis", "Steve", "Mjolnir", "Asgard"],
        correctAns: 2
    },

    {
        question: "What country is T'Challa the king of?",
        ansChoices: ["Morocco", "South Africa", "Kenya", "Wakanda"],
        correctAns: 3
    },

    {
        question: "What is Steve Roger's shield made of?",
        ansChoices: ["Gold", "Aluminium", "Helium", "Vibranium"],
        correctAns: 3
    },

    {
        question: "Who is the most 80's Avenger?",
        ansChoices: ["Doctor Strange", "Peter Quill", "Peter Parker", "Groot"],
        correctAns: 1
    },

    {
        question: "Who is the strongest Avenger?",
        ansChoices: ["Hulk", "Thor", "Black Widow", "Iron Man"],
        correctAns: 0
    }
];

var currentQuestionIndex = 0;

var currentQuestion = quesAndAns[currentQuestionIndex];

var win = 0;

var loss = 0;

var timer;

//function to start the game:
function startGame() {
    document.getElementById( "start" ).style.display = "none";
    document.getElementById( "congratulations" ).style.display = "none";
    document.getElementById( "wrongAsnwer" ).style.display = "none";
    document.getElementById( "outOfTime" ).style.display = "none";
    document.getElementById( "questions" ).style.display = "block";  
    
    loadQuestion(); 
    //to set the timer here
    timer = setInterval(outOfTime, 15000);   
    
}

function changeQuestion() {
    if (currentQuestionIndex >= quesAndAns.length) {
        document.getElementById("gameOver").innerHTML = "GAME OVER!!";
        document.getElementById( "wrongAsnwer" ).style.display = "none";
        document.getElementById( "congratulations" ).style.display = "none"; 
        document.getElementById( "outOfTime" ).style.display = "none"; 
        document.getElementById( "outOfTime" ).style.display = "block"; 
    } else { 
        currentQuestionIndex++;

        if (currentQuestionIndex >= quesAndAns.length) {
            document.getElementById("gameOver").appendChild = "GAME OVER!!";
            document.getElementById("gameOver").innerHTML = loss;
            document.getElementById("gameOver").appendChild = win;
            document.getElementById( "wrongAsnwer" ).style.display = "none";
            document.getElementById( "congratulations" ).style.display = "none"; 
            document.getElementById( "outOfTime" ).style.display = "none"; 
            document.getElementById("gameOver").style.display = "none";
            document.getElementById("reload").style.display = "block";
            
            clearInterval(timer);
            return;
            
        }
        console.log(currentQuestionIndex);
        currentQuestion = quesAndAns[currentQuestionIndex];
        console.log(currentQuestion);
        loadQuestion();   
        document.getElementById( "wrongAsnwer" ).style.display = "none";
        document.getElementById( "questions" ).style.display = "block";  
        document.getElementById( "congratulations" ).style.display = "none"; 
        document.getElementById( "outOfTime" ).style.display = "none"; 
        

        timer = setInterval(outOfTime, 15000); 
        
    }
}

//function to initial load the question after the start button is pressed:
function loadQuestion() {
    var ansHTML = '<ul>';
    for (var i = 0; i < currentQuestion.ansChoices.length; i++) {
        var functionName = "wrongAnswerPressed()";
        
        if (i === currentQuestion.correctAns) {
            functionName = "correctAnswerPressed()";
        }
        ansHTML += '<li><button class="answers" onclick=' + functionName + '>' + currentQuestion.ansChoices[i] + '</button></li>\n';
    }
    ansHTML += '</ul>';   
    document.getElementById("questions").innerHTML = '<p id="question">' + currentQuestion.question + '</p>' + ansHTML;
    
}

//when the incorrect button is pressed, then display the wrong answer as a block
function wrongAnswerPressed() {
    document.getElementById( "start" ).style.display = "none";
    document.getElementById( "congratulations" ).style.display = "none";
    document.getElementById( "wrongAsnwer" ).style.display = "block";
    document.getElementById( "outOfTime" ).style.display = "none";
    document.getElementById( "questions" ).style.display = "none";
   

    loss++;

    clearInterval(timer);

    
    setTimeout(changeQuestion,5000);
     

   
}

//when the correct answer is pressed then display the correct answer as a blcok
function correctAnswerPressed() {
    document.getElementById( "start" ).style.display = "none";
    document.getElementById( "congratulations" ).style.display = "block";
    document.getElementById( "wrongAsnwer" ).style.display = "none";
    document.getElementById( "outOfTime" ).style.display = "none";
    document.getElementById( "questions" ).style.display = "none";
    

    win++;

    clearInterval(timer);

     
    setTimeout(changeQuestion,5000);  
    
}

//when the timer runs out, display out of time as block
function outOfTime() {
    document.getElementById( "start" ).style.display = "none";
    document.getElementById( "congratulations" ).style.display = "none";
    document.getElementById( "wrongAsnwer" ).style.display = "none";
    document.getElementById( "outOfTime" ).style.display = "block";
    document.getElementById( "questions" ).style.display = "none";
    

    loss++;

    clearInterval(timer);

    setTimeout(changeQuestion,5000);
      
}


//to restart the game:
function startOver() {
    timer = setInterval(outOfTime, 15000);   
    startGame();
    loadQuestion();
    wrongAnswerPressed();
    correctAnswerPressed();
    changeQuestion();
    outOfTime();
   
}