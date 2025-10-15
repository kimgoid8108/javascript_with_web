const makeDough = () =>
  new Promise((success, fail) => {
    const Dough = prompt("도우 입력(씬, 크러스트, 오리지널)");
    success(`${Dough} 도우 만들기`);
  });

const makeTopping = () =>
  new Promise((success, fail) => {
    const topping = prompt(`토핑 입력`);
    success(`${topping} 뿌리기`);
  });

const makeCheese = () =>
  new Promise((success, fail) => {
    const Cheese = prompt("치즈 입력(모짜렐라, 체다, 슈레드)");
    success(`${Cheese} 치즈 뿌리기`);
  });

const makeBaked = () =>
  new Promise((success, fail) => {
    success("피자 굽기");
  });

const makePizza = () =>
  new Promise((success, fail) => {
    success("피자 완성");
  });

makeDough()
  .then((v) => {
    console.log(v);
    return makeTopping();
  })
  .then((v) => {
    console.log(v);
    return makeCheese();
  })
  .then((v) => {
    console.log(v);
    return makeBaked();
  })
  .then((v) => {
    console.log(v);
    return makePizza();
  })
  .then((v) => {
    console.log(v);
    console.log(`주문하신 피자 나왔습니다!`);
  });
