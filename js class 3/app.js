// for(var i = 0; i <= 5; i++){
//         alert("Helloe World")
//     }


// for(var a = 1; a <= 10; a++){
//     document.write("2" + "x" + a + "=" + 2*a + "<br>")
// }

// var names = [,"Ghulam","Ibrahim","Khan"];
// for(i = 0; i < names.length; i++){
//     console.log(names[i])
// }

// for(var i = 1; i <= 10; i++){
//     console.log("2 " + " x  " + i + " = " + i*2 )
// }

// var cities = ["Karachi","Islamabad","Lahore","Quetta"];
// for(var i = 0; i < cities.length; i++){
//     if(cities[i] === "Karachi"){
//         alert(cities[i] + " is a cleanest city!")
//     }
//     // console.log(cities[i])
// }

// var cities = ["Karachi","Islamabad","Lahore","Quetta"];
// for(var i = 0; i < cities.length; i++){
//     if(cities[i] === "Karachi"){
//         alert(cities[i] + " is a cleanest city!")
//     }
//     console.log(cities[i])
// }

//  ***Infinite Loop***
// for(var  i = 1; i > 0; i++){
//     console.log("hello")
// }

// // ***Infinite Loop Break***
// for (var i = 1; i > 0; i++) {
//     if (i === 100) {
//         break
//     }
//     console.log("hello")
// }

// *** jb loop ko us ki required value milty hi stop krna ho *** //
// var cities = ["Karachi","Islamabad","Lahore","Quetta"];
// for(var i = 0; i < cities.length; i++){
//     if(cities[i] === "Karachi"){
//         alert(cities[i] + " is a cleanest city!")
//         break
//      }
// }

// *** Nested Loop *** ///
for(var i = 0; i < 5; i++){
    for(var j = 0; j < 3; j++){
        document.write(j + " pakistan" + "<br>")
    }
}
//   ******** F O R     N E S T E D     L O O P S ********    \\
//  (1)
// var firstNames = ["Ibrahim","Tahira","Sulaman"];
// var lastNames = ["Khan"];
// for(var i = 0; i < firstNames.length; i++){
//     for(var x = 0; x < lastNames.length; x++){
//         console.log(firstNames[i] + " " + lastNames[x])
//     }
// }
//  (2)
// var firstNames = ["Ibrahim","Tahira","Sulaman"];
// var lastNames = ["Zaid","Khan"];
// for(var i = 0; i < firstNames.length; i++){
//     for(var x = 0; x < lastNames.length; x++){
//         console.log(firstNames[i] + " " + lastNames[x])
//     }
// }
//  (3)
// var firstNames = ["Ghulam","Ibrahim","Khan","Muhammad","Sulaman"];
// var lastNames = ["Osama","Haroon","Yahya"];
// var fullNames = [];
// for(i = 0; i < firstNames.length; i++){
//     for(j = 0; j < lastNames.length; j++){
//         fullNames.push(firstNames[i] + " " + lastNames[j])
//     }
// }

// ***  Triangle   *** \\
// for (var i = 0 ; i < 10; i++){
//     for (var j = 0; j < i; j++){
//         document.write("*")
//     }
//      document.write("<br>")
// }

// *** Checking palindrome word *** \\
// var word = prompt("Enter Your Name");
// var check = "" ;
// for(var i = word.length -1; i >= 0; i--){
//     check += word[i]
// }
// console.log(word , check)
// if(check === word){
//     console.log(word + " is a palindrome word.")
//     alert(word + " is a palindrome word.")
// }
// else{
//     console.log("is'nt palindrome word")
//     alert("is'nt palindrome word")
// }

// ***Changing Case*** \\
// var cityToCheck = prompt(" Enter your city");
// var cityToCheck = cityToCheck.toLowerCase();
// var cleanestCity = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCity[i]) {
//         console.log(" is the cleanest city");
//     }
// }


    //*** / Strings: Measuring length and extracting parts*** \\
        // (1)
// var name = "Ghulam Ibrahim";
// name[1];
// console.log(name[0])

        // (2)
// var name = "Ghulam Ibrahim Khan"
// console.log(name.indexOf("h"));

        //(3)
// var name = prompt("enter your name")
// console.log(name.length);

        // ***Calculator*** \\
// var val1 = +prompt("Enter Your 1st Value")
// var val2 = +prompt("Enter Your 2nd Value")
// var sign = prompt("Enter Opreator","+ - * / %")
// console.log(val1,sign,val2)
// document.write(val1,sign,val2)

// if(sign === "+"){
//     alert(val1 + val2);
//     document.write(" = " + (val1 + val2));
// }
// else if(sign === "-"){
//     alert(val1 - val2);
//     document.write(" = " + (val1 - val2));  
// }
// else if(sign === "*"){
//     alert(val1 * val2);
//     document.write(" = " + (val1 * val2));   
// }
// else if(sign === "/"){
//     alert(val1 / val2);
//     document.write(" = " + (val1 / val2));  
// }
// else if(sign === "%"){
//     alert(val1 / val2 * 100 );
//     document.write(" = " + (val1 / val2 * 100 ) + " % " );   
// }