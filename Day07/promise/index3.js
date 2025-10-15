console.log("오늘의 점메추!🎉");

const getRandomInt = (min, max) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
};

setTimeout(() => {
  console.log(`오늘의 메뉴: 햄버거!🍔`);
}, getRandomInt(1, 10));

setTimeout(() => {
  console.log(`맛점하세요! 😄`);
}, getRandomInt(1, 10) + 1000);
