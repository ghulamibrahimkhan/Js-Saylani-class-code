// *************Chapter 31***************
// Getting the current date and time

// var a = new Date();
// console.log(a);

// var b = a.toString();
// console.log(b);

// var c = b.slice(0,3);
// console.log(c)
// console.log(a.getDay());    // sunday ka index 0, monday ka 1, 

// console.log("Time " + a.getTime());
// console.log("Seconds " + a.getSeconds());
// console.log("Hours " + a.getHours());
// console.log("Full Year " + a.getFullYear());

// var date = new Date();
// console.log(date)
// var dateStr = date.toString();
// console.log(dateStr)

// var dob = new Date("Feb 11, 1999")
// console.log("This is  DOB " + " " + dob);

// var dobMili = dob.getTime();
// console.log("This is  DOB Mili " + " " + dobMili);

// var today = new Date();
// console.log("This is TODAY " + " " + dob);

// var todayMili = today.getTime();
// console.log("This is  TODAY Mili" + " " + dob);

// var diff = todayMili - dobMili
// console.log("This is difference b/w dob & today in mili Sec "+ diff);

// var diffYear = diff/(1000*60*60*24*30*12)
// console.log(diffYear);
// var accurateAge = Math.floor(diffYear);
// console.log(accurateAge);



//  ******  VS CODE ******** \\

// var dob = new Date(prompt("Enter Your Date of Birth","Feb 11, 2000"));
// var dobMili = dob.getTime();
// var today = new Date();
// var todayMili = today.getTime();
// var diff = todayMili - dobMili;
// var accurateAge = Math.floor(diff/(1000*60*60*12*30*24));
// document.write(accurateAge)

// ***(Set Full Year)***\\
// var b = new Date();
// b.setFullYear(2000);

// *************Chapter 35  (Functions)***************\\
// ****(1)****
// // function greeting(){
// //     alert("Hellow World")
// // }
// greeting();

// ****(2)*****
// function greeting(greet){
//     alert("greet")
// }
// greeting("Hello Ghulam Ibrahim");


// // ****(3)****
// function greeting(greet){           //*(1)* greet = is a PARAMETER
//     alert("greet")                  //*(2)* function jb call krty hy to parameter                                    
// }                                   //ka argument pass krty hein
// greeting("Hello Ghulam Ibrahim");   //*(3)* Hello G.Ibrahim = is a ARGUMENT


// ****(4)****
// function add(a,b,c){           
//     alert(a + b + c)                                                    
// }                                   
// add(5,8,11);


// ****(4)****
// function add(a,b,c){           
//     var z = a + b + c;
//     return z;                                                  
// }                                   
// var g = add(5,8,11);  
// alert(g);

// ****(5)****
// *** There is a GLOBAL and LOCAL variables in function

// ****(6)****
// var h = 15;             // global decleration within the function use hojati hy
// function add(a,b,c){
//     alert(h)           
//     var z = a + b + c;
//     return z;                                                  
// }                                   
// var g = add(5,8,11);  
// alert(g);   

// ****(7)****
// function ageCalculator(){
//     var dob = new Date(prompt("Enter Your Date of Birth","Feb 11, 2000"));
// var dobMili = dob.getTime();
// var today = new Date();
// var todayMili = today.getTime();
// var diff = todayMili - dobMili;
// var accurateAge = Math.floor(diff/(1000*60*60*12*30*24));
// document.write(accurateAge)
// }

// ageCalculator();


// ****(8)****
// *** Patameters ***
// function first(a,b){
//     return a + b + 9
// }
// // *** Arguments ***
// var c = console.log(first(2,3));        //Aik hi function sy teen baar alag 
// var c = console.log(first(3,3));        //alag 3 baar calculations kr wa li
// var c = console.log(first(7,5));            

// ****(9) Calculator****


// ****(10)****
// function xyz(a, b =3 ){
//     return a + b;                   // b = 3  : 3 is a defualt perameter
// } 
// console.log(xyz(1))


// ****(11)****
// function xyz(a, b =3 ){
//     return a + b;                   // b = 3  : 3 is a defualt perameter
// } 
// console.log(xyz(1,5))                //agr argument dy dy gy to defualt wala nahi chly ga 


// ****(11)**** 

var name = prompt("Enter Your Name");

switch (name) {
    case "Ghulam":
        alert("Hello Ghulam");
        break
    case "Ibrahim":
        alert("Hello Ibrahim");
        break
    case "Khan":
        alert("Hello Khan");
        break
    default:
        alert("Hello")
}