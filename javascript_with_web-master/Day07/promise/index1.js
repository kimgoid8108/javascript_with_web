// const apple = () =>
//   new Promise((success, fail) => {
//     success("사과");
//   });

const iphone = (color, version) =>
  new Promise((success, fail) => {
    success(`${color}색상 ${version}인 아이폰`);
  });

iphone("스페이스", "17").then((v) => console.log(v));
