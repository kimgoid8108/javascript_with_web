//  class 대학생
// 학번, 이름, 전공, 듣는 수업

class Student {
  #id;
  #name;
  #Classroom;
  constructor(id, name, Classroom) {
    this.#id = id;
    this.#name = name;
    this.#Classroom = Classroom;
  }
}

class Highschool extends Student {
  #Classroom;
  #grade;
  constructor(id, name, Classroom, courses) {
    super(id, name);
    this.#Classroom = Classroom;
    this.#grade = grade;
  }
}
