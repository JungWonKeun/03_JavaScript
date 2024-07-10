const user = document.querySelector("#user");
const com = document.querySelector("#computer");


const gameStart = document.querySelector(".start-btn");
const btn = document.querySelectorAll(".user-btn");
// gameStart 번호 눌렀을 때 
let start; // 몇판을 할 지 물어보는 변수
let count; // 몇판째인지 세는 변수

gameStart.addEventListener("click",function(){
  

  start = prompt("진행할 판 수를 입력하세요");    
  
  if(start === null || isNaN(Number(start))){
    alert("숫자 입력 후 확인을 눌러주세요");
    return;
  }


  for(count = 0 ; count <= start ; count++){}
    
})
// 몇번할지랑
//몇번째 눌렀는지 count할 변수 두개랑
//전에 if문 몇번 눌렀는지 비교후
//가위바위 보 버튼 하나하나에 count 변수 1씩 늘리겠다

