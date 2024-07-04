// 음식 목록
const foods = [
  { name: "원조김밥", probability: 1 },
  { name: "야채김밥", probability: 1 },
  { name: "치즈김밥", probability: 1 },
  { name: "김치김밥", probability: 1 },
  { name: "고추김밥", probability: 1 },
  { name: "참치김밥", probability: 1 },
  { name: "고추참치김밥", probability: 1 },
  { name: "소고기김밥", probability: 1 },
  { name: "누드김밥", probability: 1 },
  { name: "모듬김밥", probability: 1 },
  { name: "멸치김밥", probability: 1 },
  { name: "새우김밥", probability: 1 },
  { name: "돈까스김밥", probability: 1 },
  { name: "참치주먹밥", probability: 1 },
  { name: "소고기주먹밥", probability: 1 },
  { name: "갈비만두", probability: 1 },
  { name: "오뎅", probability: 1 },
  { name: "쫄면", probability: 1 },
  { name: "김치찌개", probability: 1 },
  { name: "참치찌개", probability: 1 },
  { name: "된장찌개", probability: 1 },
  { name: "해물된장", probability: 1 },
  { name: "순두부", probability: 1 },
  { name: "햄전골", probability: 1 },
  { name: "황태해장국", probability: 1 },
  { name: "다슬기해장국", probability: 1 },
  { name: "갈비탕", probability: 1 },
  { name: "육개장", probability: 1 },
  { name: "뚝배기불고기", probability: 1 },
  { name: "김치덮밥", probability: 1 },
  { name: "오징어덮밥", probability: 1 },
  { name: "제육덮밥", probability: 1 },
  { name: "카레덮밥", probability: 1 },
  { name: "새우볶음밥", probability: 1 },
  { name: "철판불고기덮밥", probability: 1 },
  { name: "철판김치볶음밥", probability: 1 },
  { name: "철판김치치즈덮밥", probability: 1 },
  { name: "돌솥비빔밥", probability: 1 },
  { name: "돌솥낙지비빔밥", probability: 1 },
  { name: "비빔밥", probability: 1 },
  { name: "오므라이스", probability: 1 },
  { name: "참치오므라이스", probability: 2 },
  { name: "등심돈까스", probability: 1 },
  { name: "치즈돈까스", probability: 1 },
  { name: "고구마돈까스", probability: 1 },
  { name: "카레돈까스", probability: 1 },
  { name: "치킨까스", probability: 1 },
  { name: "잔치국수", probability: 1 },
  { name: "떡국", probability: 1 },
  { name: "만두국", probability: 1 },
  { name: "떡만두국", probability: 1 },
  { name: "칼국수", probability: 1 },
  { name: "김치칼국수", probability: 1 },
  { name: "수제비", probability: 1 },
  { name: "김치수제비", probability: 1 },
  { name: "물냉면", probability: 1 },
  { name: "비빔냉면", probability: 1 },
  { name: "열무냉면", probability: 1 },
  { name: "열무국수", probability: 1 },
  { name: "콩국수", probability: 1 },
  { name: "비빔국수", probability: 1 },
  { name: "메밀국수", probability: 1 },
  { name: "김치말이국수", probability: 1 }
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
