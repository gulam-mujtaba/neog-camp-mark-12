const base = document.querySelector("#base");
const height = document.querySelector("#height");
const divOutput = document.querySelector("#output");
const chkBtn = document.querySelector("#check");

chkBtn.addEventListener("click", calculate)

function calculate (){
    const baseLength = Number(base.value);
    const heightDimension = Number(height.value);
    
    const area = (baseLength*heightDimension)/2;
    
    divOutput.innerText = "Area of the triangle = "+ area;


}