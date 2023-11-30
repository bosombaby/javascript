class Person {
  constructor(name) {
    this.name = name;
  }

  drink() {
    console.log("喝水");
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  teach() {
    console.log(`my name is ${this.name}, i teach ${this.subject}`);
  }
}

const t1 = new Teacher("张三", "语文");
