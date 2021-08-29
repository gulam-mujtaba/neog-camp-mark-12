const input = document.querySelectorAll(".angle-input");
const chkBtn = document.querySelector("#check");
const outputBox = document.querySelector(".output")

function sum (number1, number2 , number3){
    return number1+number2+number3;
    
}

chkBtn.addEventListener("click", function calculate (){
  const sumOfAngles = sum(Number(input[0].value),Number(input[1].value),Number(input[2].value));
  if (sumOfAngles == 180){
      outputBox.innerText = "These angles form a triangle. Good Job."

  }else{
    outputBox.innerText = "These angles do not form a triangle. Do some math and come back again."
  }

});