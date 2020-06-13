//TASK 1  [Print hello world.]
var a = ("Hello worl!");
alert(a);

//Task chapter 2 [varialble for string]
var name = "Sajid";
document.write(a);
name = "brohi";


//task chapter 3 [variables for numbers]

var x = 5;
var b = a+10;
alert(b);

//var chap 4 [Variable Names Legal and Illegal
//]

//  this chapter is theorical chapter we undstand that some legal and illegal names for expmle
//
//we can write var cityNames = ("katachi". "lahore" ) we dont write anySpecial Charectar befre variable.

//chapter 5 [Mathametical Operations] how we can we use methamitcl operators to adding substracti etc;\

var num = 2+2;
document.write(num);
var num2 = num - 2;
docoment.write(num2);

var num3 = 10/ 3;

alert(num3);
var num4 = num3;

alert(num4 - 2);

     
        //Chapter 6 [Increment and decrement operators]


        var x = 1;

        var y = x++ + ++x + x-- - --x;
                1 +   3 +   3 -    1;
alert(y);
               // total answer will be [6]


            //   Chapter 7 [Concatenating text strings  ]

            var print = "Welcome to javascript world!"
            alert(print);
             // in concatenating text string we can merge string value like this

             var x = "javascript";
             var y = "world";
             alert("Welcome to" + x + y + "!")






        //chapter 8 [prompt]  this task how we can get command from user;

        var num = prompt("Enter your Name:");



          //chapter 9 ["if statements          "]


//EVEN AND ODD NUMBER TASK
var typeApps= prompt("Enter a nummber i will tell you the type")
    if(typeApps %2 ==0){
        alert("This number is even ")
    }else if(typeApps%1 ==0){
        alert("this number is odd")
    }




   //CHAPTER 10 ["Comparison operators"] compression operartor is simply tell to compare === type of command;

   var x = 10;
   var b = prompt("Enter Eqaulent");

  if (x === b){
      alert("Your eqaualent");     // if uwser type string value then it shows an error

  }


     // Chapter 11 ["if...else and else if statements      "] for an example lets make a game;


    var myNumber  = 20;
    var guess = prompt("Guess myNumber its between 1 to 30 ");

   if  (guess === myNumber){
         alert("Wow you got my number Congrats!");
     }
     else if (guess < 19 && guess >  10);{
       alert("Sorry! you are colse gto my number but on left side;");
     }
     else if (guess < 10 && guess > 1 ){
        alert("Sorry!You are faraway From my number on left side;");
     }
     else if(guess > 20 && guess <  30){
        alert("Sorry you are colose to my number on right side;");
     }
     else (guess > 30 && guess < 100){
     alert("Sorry! you are far away from mu number on right side" );
     }




    // chapgter 13 ["Testing sets of conditions "] making police entry test

 if (height > 7 || chest > 33 && gender === "male"){
     alert("you are selected in police ")
 }else {
     alert("you are not selected in police")
 }
   
     
   
                     //  Chapter 14 ["if statements nested "] same exampll through nested if

                     if ((gender ==="male" || age === 18) && height > 6 ){
                         alert("congrats")
                     } else{
                         alert("Sorrrry!")
                     }



                    // Chapter 15 ["Arrays"]
                    var name1 = "sajid";
                    var name2 = "Baasir";  // if we write multiple name without arry should be like this
                    var name3 = "ahmed";
                    var name4 = "Ali";
                    var name5 = "Hiader";

                    alert("my name is "+ name1);

                    var name = ["sajid","baasir","Ahmed","Ali","Haider"] // in array we write multiple names in single line
    alert("My name is" +name[0]);   // in alert box My name is sajid will be showed



                      //CHAPTER 16 ["Arrays Adding and removing elements"]

                      var name = ["sajid","baasir","Ahmed","Ali","Haider"] // 
                      alert (name.pop());   //this will remove last world
                       alert(name.push("Ghous","Sarfraz")) // this will add element in the add off arry
                  

  
                           //  chapter 17 ["Arrays       Removing, inserting,  and extracting elements"]
                           var name = ["sajid","baasir","Ahmed","Ali","Haider"] // 
                           alert (pets.shift("saddam");   //this wwill remove element in start off array
                            alert(name.unshift("Ghous","Sarfraz")) // this will add elemnt in the start off arry.
                            alert(name.splice(2,2)) // this will remove ahmed and Ali from center you can remove a element fro anywhere you want
                            alert(name.slice(2,4)) // this will copy arry element from one array to put it into another array



                          //  Chapter 18 ["For LOOP"]   for loop enables a particular set of conditions to be executed repeatedly until a condition is satisfied.

                          
                          for( var i = 1; i < 10; i ++) // this will excuting while i will be not eqaul to 10;
                          alert(i);

                   //    Chapter 19 ["Nested Loops"]

         for( var i = 1; i < 20;  i++){ 
             for(var a = 1; a < i; a++)
                 alert(" * " + "<br>")
             
         }

                       
                           
    //  chapter 20 ["CHANGING CASE"]

    var students = ["SAJID", "hammad", "Shahzaib", "Hasnain", "Hussain"]
  

  for (var i = 0; i< students.length; i++){
      if (students[i]=== "Shahzaib"){
          alert(students[i] + "is topper of the class")
      }
  }

            //   changig case example

            var name = "SAJID";
            name = name.toLowerCase();
            alert (name);

                  





             //     CHATER 22 ["FINDING CASE"]
             var name = "Sajid Habib";
             console.log(name.indexOf("H"));



            // MAKING CACLULATOR

 var val1 = prompt("Enter first value:")
 var sign = prompt("Enter Operator")
 var val2= prompt("Enter Second value:")
 

       console.log(val1+sign+val2)
       if(sign === "+"){
         alert((+val1) + (+val2))

        }
   else if (sign === "-"){
            alert(val1 - val2)
   
           }
       else     if(sign === "/"){
            alert(val1 / val2)
   
           }
      else     if(sign === "*"){
            alert(val1 * val2)
   
           }else if (sign === '%'){
               alert(val1/val2*100+"%")
           }
   
   
//  I did it till 12th class because of that i did not attend my 13th class so ..