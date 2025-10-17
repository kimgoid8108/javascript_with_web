// Unit 클래스 작성
// 필드: name, emoji, hp
// 메소드:
// - attack 함수: {emoji},{name}이(가) 공격했다 출력하기
// - Status 함수: 남은 hp 출력 하기

// Hero 클래스 작성하기 [Unti을 상속받기]
// 필드: skills
// 메소드: activate 함수: skill이 발동했다!

// Monster 클래스 작성하기 [Unit을 상속받기]
// 필드: level

class Unit {
  #name;
  #emoji;
  #hp;

  constructor(name, emoji, hp) {
    this.#name = name;
    this.#emoji = emoji;
    this.#hp = hp;
  }

  attack() {
    console.log(`${this.#emoji}가 ${this.#name}이(가) 공격했다!`);
  }

  status() {
    console.log(`남은 hp: ${this.#hp} 정도 있습니다`);
  }
}

class Hero extends Unit {
  #skills;

  constructor(name, emoji, hp, skills) {
    super(name, emoji, hp);
    this.#skills = skills;
  }

  activate() {
    console.log(`${this.#skills}이 발동했다!`);
  }
}

class Monster extends Unit {
  #level;

  constructor(name, emoji, hp, level) {
    super(name, emoji, hp);
    this.#level = level;
  }
}
