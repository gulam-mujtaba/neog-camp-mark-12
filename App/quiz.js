const quizForm = document.querySelector(".quiz-form");
const chkBtn = document.querySelector(".button");

const divOutput = document.querySelector(".output");
const correctAnswers = ["3","180","Isoceles","506040","100"];



function answer (){
    let score = 0;
    let i = 0;
    const inputResults = new FormData(quizForm);
    for (let value of inputResults.values()){
        for(let i = 0 ; i<=4; i++){
        if (value === correctAnswers[i]){
            score = score + 1;     
            console.log(value)
            i = i + 1 ;
        }
    }
    }

    console.log(score)
    
    if (score === 5){
        divOutput.innerText = "Good Job. Triangle Master 📐";
    }else {
        divOutput.innerText = "Your Score is " + score + ". Give it another try. Triangles are Easy";
    }


}


chkBtn.addEventListener("click", answer);