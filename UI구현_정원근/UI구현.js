const btn = document.getElementById("btn");
const box = document.querySelector(".box");

const widthInput = document.querySelector(".widthInput");
const heightInput = document.querySelector(".heightInput");

const fontSizeInput = document.querySelector(".fontSize");
const colorInput = document.querySelector(".colorInput");
const bgColorInput = document.querySelector(".bgColorInput");

const inputBox = document.querySelector(".inputBox");

btn.addEventListener("click", function(){
  
  const widthValue = widthInput.value;
  const heightValue = heightInput.value;

  const fontSizeValue = fontSizeInput.value;
  const colorValue = colorInput.value;
  const bgColorValue = bgColorInput.value;
  const inputValue = inputBox.value;

  const fontWeightInputs = document.querySelectorAll('input[name="fontWeigth"]:checked');
  const rowInputs = document.querySelectorAll('input[name="rowInput"]:checked');
  const columnInputs = document.querySelectorAll('input[name="columnInput"]:checked');

  box.style.width = widthValue + "px";
  box.style.height = heightValue + "px";

  box.style.fontSize = fontSizeValue + "px";
  box.style.color = colorValue;
  box.style.backgroundColor = bgColorValue;
  box.innerText = inputValue;

  let fw;
  for (let i = 0; i < fontWeightInputs.length; i++) {
    if (fontWeightInputs[i].checked) {
      fw = fontWeightInputs[i].value;      
    }
  }
  box.style.fontWeight = fw;

  let ri;
  for (let i = 0; i < rowInputs.length; i++) {
    if (rowInputs[i].checked) {
      ri = rowInputs[i].value;      
    }
  }
  box.style.justifyContent = ri;

  let ci;
  for (let i = 0; i < columnInputs.length; i++) {
    if (columnInputs[i].checked) {
      ci = columnInputs[i].value;      
    }
  }
  box.style.alignItems = ci;

});