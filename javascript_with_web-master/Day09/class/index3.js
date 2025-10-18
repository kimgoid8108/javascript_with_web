class Player {
  name;
  position;
  age;
  salary;

  constructor(name, position, age, salary) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.salary = salary;
  }
  changeposition(position) {
    this.position = new position();
  }
}

class SoccerTeam {
  name;
  players;
  supervision;

  constructor(name, supervision) {
    this.name = name;
    this.players = [];
    this.supervision = supervision;
  }

  listPlayer() {
    console.log(this.players);
  }

  addplayer(newplayer) {
    this.players.push(newplayer);
  }

  removeplayer(name) {
    this.players = this.players.filter((v) => v.name != name);
  }
}
const team = new SoccerTeam("영철 FC", "이영철");

// 인스턴트(instance)
team.addplayer(new Player("신여진", "미드필더", 26, 3000));
team.addplayer(new Player("신여진", "미드필더", 26, 3000));
team.addplayer(new Player("신여진", "미드필더", 26, 3000));
team.addplayer(new Player("신여진", "미드필더", 26, 3000));
team.addplayer(new Player("신여진", "미드필더", 26, 3000));
team.addplayer(new Player("신여진", "미드필더", 26, 3000));

team.listPlayer();
