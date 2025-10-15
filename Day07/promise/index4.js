// 라면 끓이기 프로그램
// 콘솔로 모든 과정이 찍혀야됨!
const getRandomInt = (min, max) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
};

// 1. 물받기 (1 - 5초)

const water = () =>
  new Promise((success, fail) => {
    console.log(`라면 물 받는 중...`);

    setTimeout(() => {
      console.log("✅ 물 받기 완료");
      success();
    }, getRandomInt(1, 5));
  });

// 2. 물끓이기 (5 - 8초)
const boil = () =>
  new Promise((success, fail) => {
    console.log(`물 끓이는 중...`);

    setTimeout(() => {
      console.log("✅ 물 끓이기 완료");
      success();
    }, getRandomInt(5, 8));
  });

// 3. 면과 스프 넣기 (1 -3 초)
const noudleSoup = () =>
  new Promise((success, fail) => {
    console.log(`면이랑 스프 넣는 중...`);

    setTimeout(() => {
      console.log("✅ 면이랑 스프 넣기 완료");
      success();
    }, getRandomInt(1, 3));
  });

// 4. 계란 넣기 (1 - 2 초)
const egg = () =>
  new Promise((success, fail) => {
    console.log(`계란 넣는 중...`);

    setTimeout(() => {
      console.log("✅ 계란 넣기 완료");
      success();
    }, getRandomInt(1, 2));
  });

// 5. 라면 전체 익히기 (5 - 10초)
const lastBoil = () =>
  new Promise((success, fail) => {
    console.log(`라면 익히는 중...`);

    setTimeout(() => {
      console.log("✅ 라면 익히기 완료");
      success();
    }, getRandomInt(5, 10));
  });

// 6. 라면 완성
const finish = () =>
  new Promise((success, fail) => {
    console.log(`라면 완성 되는 중....`);

    setTimeout(() => {
      console.log("🎉 라면 완성!! 🎉");
      success();
    }, getRandomInt(1, 2));
  });
water()
  .then((v) => {
    console.log(v);
    return boil();
  })
  .then((v) => {
    console.log(v);
    return noudleSoup();
  })
  .then((v) => {
    console.log(v);
    return egg();
  })
  .then((v) => {
    console.log(v);
    return lastBoil();
  })
  .then((v) => {
    console.log(v);
    return finish();
  });
