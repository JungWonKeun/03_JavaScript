/** 인라인 이벤트 모델 + this 확인 */
function check1(btn){
  // 매개 변수 btn : 함수 호출 시 () 안에 작성된
  //                 check(this)의 this가 대입됨
  
  // btn === this === 이벤트가 발생한 요소(div.my-btn1)
  console.log(btn);

  // 클릭된 요소(btn)에 작성된 내용이 숫자이면 1증가
  // 아니면 0을 대입
  
  // NaN : 숫자 아님
  // isNaN(값) : 숫자 아니면 true 
  // Number(값) : number 타입으로 변환
  
  // Number(btn.innerText) === NaN

  if( isNaN(Number(btn.innerText) )){ // 숫자가 아니면
    btn.innerText = 0;

  } else{
    // ++ 증감 연산자는 오로지 number 타입에만 사용 가능!
    // -> 피연산자가 숫자형태의 문자열인 경우("123")
    //    강제로 숫자 타입으로 바꿔서 연산을 수행
    btn.innerText++;    

    // btn.innerText = btn.innerText + 1;
  }
}