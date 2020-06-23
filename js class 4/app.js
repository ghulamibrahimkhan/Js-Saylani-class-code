// for(var i = 1; i <= 100; i = i+10){
//     document.write(i + "<br>")
// }

// for(var i = 1; i <= 100; i = i+10){
//     for(var j = i; j < i+10; j++){
//         document.write(j + " ") 
//     }   
//     document.write("<br>")
// }
// var name = prompt("Search City Name");
// var firstChr = name.slice(0, 1)
// firstChr = firstChr.toUpperCase();

// var remainingChr = name.slice(1);
// remainingChr = remainingChr.toLowerCase();
// citiesSearch = firstChr + remainingChr;

// var cities = ["Karachi", "Lahore", "Islamabad", "Lahore"];

// for (i = 0; i < cities.length; i++){
//     if (cities[i] === citiesSearch){
//         alert(cities[i] + " Is In The List")
//     }
//     else{
//         alert("Not in the list")
//     }
//     break
// }


// var str = prompt("Enter some text");
// var numChar = str.length;
// for(var i = 0; i < numChar; i++){
//     if(str.slice(i, i + 2) === "  "){
//         alert("Double spaces! are found")
//         break
//     }
// }

//  *******************      CHAPTER             20   ****************************

// **********Not ideal, it slow downs the application***********
// var text = "The code loops through the string looking for World War II. Line 2 progresses"

// var charWw2 = text.length;
// var str = "World War II";
// for(var i = 0; i < charWw2; i++){
//     if (text.slice(i, i + 12) === "World War II") {
//          text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//          document.write(text);
//          }
// }

// *******************      CHAPTER             23   ****************************
                    // INdex OF
// var text = "The code loops through the string looking for World War II. Line 2 progresses";
// var textIndex = text.indexOf("World War II");                                     // lastindexOf()                             
// var firstText = text.slice(0,textIndex)
// var replacingText = "The Second World War"
// var secondText = text.slice(textIndex+12)
// console.log(firstText + replacingText + secondText);

// *******************      CHAPTER             24   ****************************
// **** returns the index of the letter*****
var name = "Ghulam Ibrahim Khan";
var abc = name.charAt(9)

// *******************      CHAPTER             25   ****************************
// var para = "Osama Khan is the brother of Sulaman Khan, and Sulaman Khan is the brother of Osama Khan"
// console,console.log(para);

// var paraReplace = para.replace("Osama","Ghulam Ibrahim")                  // .replace srf 1st waly ko replace kry ga
// console,console.log(paraReplace);
// // *******************************************\\

// var para = "Osama Khan is the brother of Sulaman Khan, and Sulaman Khan is the brother of Osama Khan"
// console,console.log(para);

// var paraReplace = para.replace(/Osama/g,"Ghulam Ibrahim")                  // .replace k baad wo text "" ki bjaey **/drmian/g** my rkh dein gy
// console,console.log(paraReplace);

// *******************      CHAPTER             26   ****************************

// ***********METHOD 2  (Math.ceil)**************
// var num = prompt()
// var numRound = Math.round(num);
// alert(numRound + " round")


// ***********METHOD 2  (Math.ceil)**************

// var num = prompt()                      
// var numCeil = Math.ceil(num);                  //**** ye 1.1 ko 2 kr dy ga 
// alert(numCeil + " ceil")


// // ***********METHOD 3  (Math.floor)**************

// var num = prompt()                      
// var numFloor = Math.floor(num);                  //**** ye 1.9 ko 1 kr dy ga 
// alert(numFloor + " Floor")


// *******************      CHAPTER             27   ****************************
// var randomNum = Math.random();
// console.log(randomNum)


// ***** Example with Game**********\\
// var headUser = prompt(" Enter Heads Username ");
// var tailUser = prompt(" Enter Tails Username ");

// var toss = Math.random() * 2;

// var floorNum = Math.floor(toss);

// console.log(floorNum)
// if(floorNum === 0){
//     alert("Heads " + headUser + " win the toss")
// }
// else{
//     alert("Tails " + tailUser + " win the toss")
// }

// *******************      CHAPTER             27   ****************************
            // ***STR to NUM***
// var num = "10";
// var strNum = parseInt(num);                    // Or ***var strNum = Number(num);***
// console.log(strNum);

// var add = strNum + 10;
// console.log(add);

// // *******************      CHAPTER             27   ****************************
//         //***NUM to STR */
// var num = 10;
// var numStr = num.toString();
// console.log(numStr);
// var conct = numStr + 10;
// console.log(conct);


// *******************      CHAPTER             27   ****************************

// *************************Controlling th length of a decimal******************

// var num = 10.25459;
// var numControl = num.toFixed(3);
// console.log(numControl);