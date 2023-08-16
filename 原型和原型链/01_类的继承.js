class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log('hello class');
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    introduce() {
        console.log(`my name is ${this.name},my age is ${this.age}`);
    }
}

const s1 = new Student('张三', 18)
s1.introduce()


class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }

    introduce() {
        console.log(`my name is ${this.name},my subject is ${this.subject}`);
    }
}

const t1 = new Teacher('李四', '语文')
t1.introduce()