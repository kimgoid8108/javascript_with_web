// const a1 = {
//   name: "아메리카노",
//   price: 4800,
//   shots: 2,
//   size: "tall",
//   discount: function (balance) {
//     this.pirce = this.pirce * balance;
//   },
// };

// const a2 = {
//   name: "아메리카노",
//   price: 5300,
//   shots: 3,
//   size: "grande",
//   discount: function (balance) {
//     this.pirce = this.pirce * balance;
//   },
// };

// const a3 = {
//   name: "아이스라떼",
//   price: 6600,
//   shots: 4,
//   size: "grande",
//   discount: function (balance) {
//     this.pirce = this.pirce * balance;
//   },
// };

// // const makeCoffee = (name, price, shots, size, balance) => {
// //   const newPrice = price;
// //   const discount = (balance) => {};

// //   return { name, price, shots, size };
// // };

// // 클래스는 오브젝트를 만들어주는 문법 with 함수까지
// // 클래스: 변수 & 함수(초기화 함수, 일반 함수)
// class Coffee {
//   name;
//   price;
//   shots;

//   constructor(a, b, c) {
//     this.name = a;
//     this.price = b;
//     this.shots = c;
//   }
// }

// const a = new Coffee("아메리카노", 5300, 3);

// console.log(a);

class SoccerTeam {
  teamName;
  players;
  supervision;
  yearEstablishment;

  constructor(teamName, supervision, yearEstablishment) {
    this.teamName = teamName;
    this.supervision = supervision;
    this.yearEstablishment = yearEstablishment;
    this.players = [];
  }

  registerPlayer(name, number) {
    this.players.push({ name, number });
  }
}

const all = new SoccerTeam("전북 현대", "구스타보 포예트", 1994);

all.registerPlayer("여진", 7);
all.registerPlayer("영철", 10);
all.registerPlayer("정우", 21);
console.log(all);
