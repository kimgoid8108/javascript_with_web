//  class 대학생
// 학번, 이름, 전공, 듣는 수업

class student {
  studentNm;
  name;
  specialty;
  lecture;

  constructor(studentNm, name, specialty) {
    this.studentNm = studentNm;
    this.name = name;
    this.specialty = specialty;
    this.lecture = [];
  }
  register(lecture) {
    this.lecture.push(lecture);
  }
}

class lecture {
  name;
  professor;
  time;
  constructor(name, professor, time) {
    this.name = name;
    this.professor = professor;
    this.time = time;
  }
}

const myStudent = new student(201909045, "이영철", "조선기계공학과");
myStudent.register(new lecture("간호학개론", "신여진", 2));
console.log(myStudent);
