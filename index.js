
/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  constructor (name, age) {
    this.name = name,
    this.age = age
    this.stomach = []
  }
}

Person.prototype.eat = function(someFood) {
  if (this.stomach.length < 10) {
    this.stomach.push(someFood)
  }
}

Person.prototype.poop = function() {
  for (let i = -(this.stomach.length); i < 0; i++) {
    this.stomach.pop() 
  }
}

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`
}

/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor (model, milesPerGallon) {
    this.model = model
    this.milesPerGallon = milesPerGallon
    this.tank = 0
    this.odometer = 0
  }
}

Car.prototype.fill = function(gallons) {
  this.tank += gallons
}

Car.prototype.drive = function (distance) {
  if (distance <= this.milesPerGallon * this.tank) {
  this.odometer += distance
  this.tank -= distance/this.milesPerGallon
} else {
  this.odometer = this.milesPerGallon * this.tank
  this.tank = 0
  return `I ran out of fuel at ${this.odometer} miles!`
}

}

/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian {
  constructor (obj) {
    this.name = obj.name
    this.age = obj.age
    this.location = obj.location
  }
  speak = () => {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  } 
}
Lambdasian.prototype.speak = () => {
  return `Hello my name is ${this.name}, I am from ${this.location}`
}


/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Lambdasian{
  constructor (obj2) {
    super(obj2, obj2.name, obj2.age, obj2.location)
    this.specialty = obj2.specialty
    this.favLanguage = obj2.favLanguage
    this.catchPhrase = obj2.catchPhrase
  }
}
Instructor.prototype.demo = function (subject) {
  return `Today we are learning about ${subject}`
}
Instructor.prototype.grade = function (student, subject){
  return `${student.name} receives a perfect score on ${subject}`
}


/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before BloomTech
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student extends Lambdasian{
  constructor (obj3) {
    super(obj3, obj3.name, obj3.age, obj3.location)
    this.previousBackground = obj3.previousBackground
    this.className = obj3.className
    this.favSubjects = obj3.favSubjects
  }
}
Student.prototype.listSubjects = function () {
 return `Loving ${this.favSubjects}`
}

Student.prototype.PRAssignment = function (subject) {
  return `${this.name} has submitted a PR for ${subject}`
}

Student.prototype.sprintChallenge = function (subject) {
return `${this.name} has begun sprint challenge on ${subject}`
}

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Instructor {
  constructor (obj4) {
    super(obj4, obj4.name, obj4.age, obj4.location, obj4.specialty, obj4.favLanguage, obj4.catchPhrase)
    this.gradClassName = obj4.gradClassName
    this.favInstructor = obj4.favInstructor
  }
}

ProjectManager.prototype.standUp = function (channel) {
  return `${this.name} announces to ${channel}, @channel standy times!`
}

ProjectManager.prototype.debugsCode = function (student, subject) {
return `${this.name} debugs ${student.name}'s code on ${subject}`
}

/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from BloomTech
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/


//End of Challenge
/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  return 'bar';
}

module.exports = {
  foo,
  Person,
  Car,
  Lambdasian,
  Instructor,
  Student,
  ProjectManager
}
