#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
import showBanner from "node-banner";

(async () => {
    await showBanner('Management-System', '',"blue");
})();

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name
    }
    getAge(){
        return this.age
    }
}

class Student extends Person {
    static idNumber: number = 10000 
    courses: Course[] = []
    rollnumber: string;
    constructor(name: string, age: number) {
        super(name, age);
        this.rollnumber = "BS-" + ++Student.idNumber;
        this.courses
    }
 
}



class Instuctor extends Person {
    private salary: number;
    course:string
    // courses: Course[] = [];

    constructor(name: string, age: number, salary: number,course:string) {
        super(name, age)
        this.salary = salary;
        this.course = course
    }
    getCourse(){
        return this.course
    }

}

class Course  {
    id: string;
    name: string;
    course: string;
    constructor(id: string, name: string,course:string) {
        this.id = id;
        this.name = name;
        this.course = course
    }
    getCourse(){
        return this.course
    }
}
var student1 = new Student(" ", 0 );
var student2 = new Student("Sami Ansari", 21 );
var student3 = new Student("Taha ", 26 );
var student4 = new Student("Ali ", 24 );
var student5 = new Student("Samad ", 19 );
var instructor1 = new Instuctor(" ", 0, 0,"");
var instructor2 = new Instuctor("Zia ", 75, 85000,"Artificial Intelligence");
var instructor3 = new Instuctor("Umair ", 45, 100000,"Block Chain");
var instructor4 = new Instuctor("Hamza", 35, 110000,"Philosophy");
var course1 = new Course("", "","");
var course2 = new Course(student2.rollnumber, student2.getName(),"Artificial Intelligence");
var course3 = new Course(student3.rollnumber, student3.getName(),"Block Chain");
var course4 = new Course(student4.rollnumber, student4.getName(),"Math");
var course5 = new Course(student5.rollnumber, student5.getName(),"Philosophy");

setTimeout( async() => {
    

const selectedOpt: { Person: "Studens"| "Instuctor",information :"Add"| "Details"  } = await inquirer.prompt([
    {
        type: "list",
        name: "Person",
        choices: ["Studens", "Instuctor"],
        message: "Select Entity: ",
    },
    {
        name: "information",
        type: "list",
        choices: ["Add", "Details"],
        message: "Options ",
    },

])

if (selectedOpt.information == "Add" && selectedOpt.Person == "Studens") {
const  answer:{
    name: string,
    age: number,
    course:"Math"|"Science"|"Philosophy"|"Artificial Intelligence"|"Block Chain",
    Detail: boolean
} = await inquirer.prompt([
    {
        type: "string",
        name: "name",
        message:"Enter your name: "
    },
    {
        type: "number",
        name: "age",
        message:"Enter your age: "
    },
    {
        type: "list",
        name: "course",
        choices:["Math","Science","Philosophy","Artificial Intelligence","Block Chain"],
        message:"Select the course you want to enroll  : "
    },
    {
        type: "confirm",
        name: "Detail",
        message:"Want to see details : "
    },
]);
var {name,age ,course,Detail} = answer;
 student1 = new Student(answer.name, answer.age );
 course1 = new Course(student1.rollnumber,student1.getName(),answer.course );
 if(Detail == true){
    console.log(chalk.blue(`Name: ${student2.getName()}`));
    console.log(chalk.blue(`Age: ${student2.getAge()}`));
    console.log(chalk.blue(`Roll Number: ${student2.rollnumber}`));
    console.log(chalk.blue(`Course: ${course2.getCourse()}\n`));

    console.log(chalk.blue(`Name: ${student5.getName()}`));
    console.log(chalk.blue(`Age: ${student5.getAge()}`));
    console.log(chalk.blue(`Roll Number: ${student5.rollnumber}`));
    console.log(chalk.blue(`Course: ${course5.getCourse()}\n`));

    console.log(chalk.blue(`Name: ${student3.getName()}`));
    console.log(chalk.blue(`Age: ${student3.getAge()}`));
    console.log(chalk.blue(`Roll Number: ${student3.rollnumber}`));
    console.log(chalk.blue(`Course: ${course3.getCourse()}\n`));

    console.log(chalk.blue(`Name: ${student4.getName()}`));
    console.log(chalk.blue(`Age: ${student4.getAge()}`));
    console.log(chalk.blue(`Roll Number: ${student4.rollnumber}`));
    console.log(chalk.blue(`Course: ${course4.getCourse()} \n`));

    console.log(chalk.blue(`Name: ${student1.getName()}`));
    console.log(chalk.blue(`Age: ${student1.getAge()}`));
    console.log(chalk.blue(`Roll Number: ${student1.rollnumber}`));
    console.log(chalk.blue(`Course: ${answer.course}`));
 }

}
else if(selectedOpt.information == "Details" && selectedOpt.Person == "Studens" ){
    console.log(chalk.blue(`Name: ${student2.getName()}`));
    console.log(chalk.blue(`Age: ${student2.getAge()}`));
    console.log(chalk.blue(`Roll Number: ${student2.rollnumber}`));
    console.log(chalk.blue(`Course: ${course2.getCourse()}\n`));

    console.log(chalk.blue(`Name: ${student5.getName()}`));
    console.log(chalk.blue(`Age: ${student5.getAge()}`));
    console.log(chalk.blue(`Roll Number: ${student5.rollnumber}`));
    console.log(chalk.blue(`Course: ${course5.getCourse()}\n`));

    console.log(chalk.blue(`Name: ${student3.getName()}`));
    console.log(chalk.blue(`Age: ${student3.getAge()}`));
    console.log(chalk.blue(`Roll Number: ${student3.rollnumber}`));
    console.log(chalk.blue(`Course: ${course3.getCourse()}\n`));

    console.log(chalk.blue(`Name: ${student4.getName()}`));
    console.log(chalk.blue(`Age: ${student4.getAge()}`));
    console.log(chalk.blue(`Roll Number: ${student4.rollnumber}`));
    console.log(chalk.blue(`Course: ${course4.getCourse()} \n`));
   
}
else if (selectedOpt.information == "Add" && selectedOpt.Person == "Instuctor") {
const  answer:{
    name: string,
    age: number,
    amount: number,
    course:"Math"|"Science"|"Philosophy"|"Artificial Intelligence"|"Block Chain",
    Detail: boolean
} = await inquirer.prompt([
    {
        type: "string",
        name: "name",
        message:"Enter your name: "
    },
    {
        type: "number",
        name: "age",
        message:"Enter your age: "
    },
    {
        type: "number",
        name: "amount",
        message:"Enter Instuctor Salary : "
    },   
     {
        type: "list",
        name: "course",
        choices:["Math","Science","Philosophy","Artificial Intelligence","Block Chain"],
        message:"Select the course you want to enroll  : "
    },
    {
        type: "confirm",
        name: "Detail",
        message:"Want to see details : "
    },
]);
var {name,age , amount,course,Detail} = answer;

 instructor1 = new Instuctor(answer.name, answer.age, answer.amount,answer.course);
 console.log(chalk.red(`Name: ${instructor2.getName()}`));
 console.log(chalk.red(`Age: ${instructor2.getAge()}`));
 console.log(chalk.red(`Course: ${instructor2.getCourse()} \n`));

 console.log(chalk.red(`Name: ${instructor3.getName()}`));
 console.log(chalk.red(`Age: ${instructor3.getAge()}`));
 console.log(chalk.red(`Course: ${instructor3.getCourse()} \n`));

 console.log(chalk.red(`Name: ${instructor4.getName()}`));
 console.log(chalk.red(`Age: ${instructor4.getAge()}`));
 console.log(chalk.red(`Course: ${instructor4.getCourse()} \n`));
 
}
else if(selectedOpt.information == "Details" && selectedOpt.Person == "Instuctor" ){
    console.log(chalk.red(`Name: ${instructor2.getName()}`));
    console.log(chalk.red(`Age: ${instructor2.getAge()}`));
    console.log(chalk.red(`Course: ${instructor2.getCourse()} \n`));

    console.log(chalk.red(`Name: ${instructor3.getName()}`));
    console.log(chalk.red(`Age: ${instructor3.getAge()}`));
    console.log(chalk.red(`Course: ${instructor3.getCourse()} \n`));

    console.log(chalk.red(`Name: ${instructor4.getName()}`));
    console.log(chalk.red(`Age: ${instructor4.getAge()}`));
    console.log(chalk.red(`Course: ${instructor4.getCourse()} \n`));
}
}, 1000);
