let student = { 
name: "Akhil Ghanekar", 
rollno: 16, 
division: "D15A", 
age: "19", 
} 
console.log("Student object: ", {student}) 
// using class 
class Student { 
constructor(name, rollno, division, age) { 
this.name = name; 
this.rollno = rollno; 
this.division = division; 
this.age = age; 
} 
} 
let student1 = new Student("Akhil", 16, "D15A", "19"); 
console.log("Student object (object through constructor): ", {student1}) 
function validate(){ 
const check = document.getElementById("validateThis").value; 
console.log(check); 
if (isNaN(check) || check <= 0) { 
alert("Invalid input") 
throw new Error("Invalid Input "); 
} else { 
console.log("Valid"); 
} 
}