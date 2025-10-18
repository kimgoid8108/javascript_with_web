const makeDough = (nextstep) => {
  console.log("도우 만들기");
  nextstep();
};

const makeTomato = (nextstep) => {
  console.log("토마토 바르기");
  nextstep();
};

const makeCheese = (nextstep) => {
  console.log("치즈 뿌리기");
  nextstep();
};

const makeBaked = (nextstep) => {
  console.log("피자 굽기");
  nextstep();
};

const makePizza = (nextstep) => {
  console.log("피자 완성");
  nextstep();
};

const makepacked = () => {
  console.log("피자 포장");
};

makeDough(() => {
  makeTomato(() => {
    makeCheese(() => {
      makeBaked(() => {
        makePizza(() => {
          makepacked();
        });
      });
    });
  });
});
