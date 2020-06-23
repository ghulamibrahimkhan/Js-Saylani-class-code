// var a = prompt("Enter Your Name", "Your Name Is:")

// var a = "Enter Your Name";
// var b = "Your Name:";
// var x = prompt(a,b)
// var y = +x + 10;
// document.write("The output is" + " " + y); 

// var age = +prompt("Enter Your Age", "your age")
// if(age == 18){
//     alert("Your Age is equal");
// }
// else if(age < 18){
//     alert("Your age is less")
// }
// else{
//     alert("your age is acceptable")
// }

// var a = prompt("Age");
// var b = prompt("Gender");
// if(a > 18 || b == "male" ){
//     alert("you are allowed")
// }
// else{
//     alert("you're not allowed")
// }


// var a = 10;
// if (a !== 15){
//     document.write("correct")
// }
// else {
//     document.write("incorrect")
// }

// var a = "**Error**" + " " + "Pleease enter correct value";
// var percentage = prompt("Enter Your percentage")
// if (percentage >= 80 && percentage <= 100){
//     alert("A+")
// }
// else if (percentage >= 70 && percentage <= 80){
//     alert("A")
// }
// else if (percentage >= 60 && percentage <= 70){
//     alert("B")
// }
// else if (percentage >= 50 && percentage <= 60){
//     alert("C")
// }
// else if (percentage >= 40 && percentage <= 50){
//     alert("D")
// }
// else if (percentage >= 33 && percentage <= 40){
//     alert("E")
// }
// else if (percentage >= 0 && percentage <= 33){
//     alert("F")
// }
// else {
//     alert("**Error**" + " " + "Pleease enter correct value")
// }


// if ((x === y || a === b) && c===d) {
//     g = h;
// }
// else{
//     e = f;
// }



// if (c === d) {
//     if (x === y) {
//         g = h;
//     }
//     else if (a === b) {
//         g = h
//     }
//     else{
//         e = f
//     }
// }
// else{
//     e = f;
// }


// var name = Ibrahim;
// var name1 = Tahira;
// var name = Sulaman

// var siblings = ["ibrahim","tahira","sulaman"]
// document.write("Welcome" + " " +  siblings[0])

// siblings.pop()     **remove**

// siblings.push("ibrahim",7)  **push**

// console.log(siblings[4])



// var siblings = ["ibrahim","tahira","sulaman"]

// siblings.shift()

// console.log(siblings)



// var siblings = ["ibrahim","tahira","sulaman","asad"]
// siblings.splice(0,0)
// siblings.splice(2,0,"farab","osama")
// console.log(siblings)


var siblings = ["ibrahim","tahira","sulaman","asad","osama","farab"]

var copySiblings = siblings.slice(1,4)

console.log(siblings)

console.log(copySiblings)
