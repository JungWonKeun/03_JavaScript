// 음식 목록
const foods = [
  { name: "칼바람", probability: 1 },
  { name: "볼링", probability: 100 },
  { name: "풋살", probability: 1 },
  { name: "농구", probability: 1 },
  { name: "번지점프", probability: 1 },
  { name: "수영", probability: 1 },
  { name: "응가", probability: 1 },
  { name: "마작", probability: 100 },
  { name: "테니스", probability: 1 },
  { name: "클라이밍", probability: 1 },

];

// 확률을 고려하여 랜덤 음식 선택 후 화면에 표시하는 함수
function displayRandomFood() {
  // 모든 음식의 확률을 합산
  const totalProbability = foods.reduce((acc, food) => acc + food.probability, 0);
  
  // 랜덤한 확률 값 생성
  let random = Math.random() * totalProbability;
  
  // 확률에 따라 음식 선택
  for (const food of foods) {
      random -= food.probability;
      if (random <= 0) {
          document.getElementById("foodDisplay").innerText = food.name;
          break;
      }
  }
}
