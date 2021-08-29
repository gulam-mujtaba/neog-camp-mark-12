const sideA = document.querySelector("#input-side-a");
const sideB = document.querySelector("#input-side-b");
const divOutput = document.querySelector(".output");
const chkBtn = document.querySelector(".check");


chkBtn.addEventListener("click", calculate)


function calculate(){
const a = Number(sideA.value);
const b = Number(sideB.value);
const sum = a*a + b*b;

const hypotenuse = Math.sqrt(sum);

divOutput.innerText = "Length of Hypotenuse = " + hypotenuse;

}
