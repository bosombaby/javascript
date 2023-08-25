class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    introduce() {
        console.log(`my name is ${this.name},my score is ${this.score}`);
    }
}

Student.prototype.hairColor = 'black'

const s1 = new Student('张三', 68)
const s2 = new Student('李四', 90)

s1.__proto__.hairColor = 'red'

