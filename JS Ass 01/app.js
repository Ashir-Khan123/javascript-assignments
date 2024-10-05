 //------------------------------------------  Chapter # 01  -------------------------------------------------

                    // Question # 01

alert("Hi! Welcome to our website")

                    // Question # 02

alert("Error! Please enter a valid password.");

                    // Question # 03

alert("Welcome to JS land \n Happy Coding!");

                    // Question # 04

alert("Welcome to JS land...");
alert("Happy Coding! \n Prevent this page from creating additional dialogs");

                    // Question # 05

console.log("Hello... I can run JS through my web brower's console");

                    // Question # 07

// head section / before body closing tag

//-------------------------------------------- Chapter # 02  ------------------------------------------------------

                    // Question # 01

var username;

                    // Question # 02

var myName = "Ashir khan";

                    // Question # 03

var message;
message = "Hello World"
alert(message);

                    // Question # 04

var my_name = "Ashir Khan";
var age = "30 years old";
var course_name = "Web Development";
alert(my_name);
alert(age);
alert(course_name);

                    // Question # 05

alert("pizza \npizz \npiz \npi \np")

                    // Question # 06

var email = "ashir@gmail.com";

alert("My Email Address is" + " " + email);

                    // Question # 07

var book = "A smarter way to learn javascript";

alert("I am trying to learn form the book" + " " + book);

                    // Question # 08

console.log("Yah! I can write HTML content through JavaScript")

                    // Question # 09

var string1 = "<--------$@$-------->"

alert(string1);

console.log(string1);

// -------------------------------------------  Chapter # 03  ----------------------------------------------

                        // Question # 01

var age = 20;

alert("I am" + " " + age + " " + "years old");

                        // Question # 02

var visit = 12;

console.log("You have visited this site"+ " " + visit + " " + "times")

                        // Question # 03

var birthYear = 2004;

console.log("My birth year is" + " " + birthYear + "\nData type of my declared variable is" + " " + typeof(birthYear));

                        // Question # 04

var visitorName = prompt("Enter Your Name");

var product_title = prompt("What you want purchase")

var product$quantity = prompt("How many products")

console.log(visitorName + " " + "ordered" + " " + product$quantity + " " + product_title + " " + "on XYZ clothing store");

// -------------------------------------------  Chapter # 04  ----------------------------------------------------

                        // Question # 01

var var1 , var2, var3;

                        // Question # 02

// 05 LEGAL VARIABLE NAME

// var_name
// varName
// varname
// var$name
// varname5

// 05 ILLEGAL VARIABLE NAME

// 5varname
// var-name
// var name
// alert
// var

                        // Question # 03

// a) "Rules for naming JS variable"

// b) variable name can only contain number , dollar , underscore and camel-case

// c) variables must begin with a letter , dollar , underscore

// d) variable names are case sensitive

// e) var names should not be JS keyword

// ---------------------------------- Chapter # 05 ----------------------------------------------

                                // Question # 01
        // Adding two numbers

var num1 = prompt("Enter your first number : ");

var num2 = prompt("Enter your second number : ");

var sum = +num1 + (+num2);

console.log("The sum of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + sum);

                                // Question # 02
        // Subtract two numbers

var num1 = prompt("Enter your first number : ");

var num2 = prompt("Enter your second number : ");

var minus = num1 - num2;

console.log("The subtraction of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + minus);

        // Multiply two numbers

var num1 = prompt("Enter your first number : ");

var num2 = prompt("Enter your second number : ");

var multiply = num1 * num2;

console.log("The multiplication of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + multiply);

        // Divide two numbers

var num1 = prompt("Enter your first number : ");

var num2 = prompt("Enter your second number : ");

var divide = num1  /  num2;

console.log("The division of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + divide);

        // modulus of two numbers

var num1 = prompt("Enter your first number : ");

var num2 = prompt("Enter your second number : ");

var modulus = num1  %  num2;

console.log("The remainder of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + modulus);

                                // Question # 03

//             (a)

var Name;

//             (b)

console.log("value after variable declaretion is : " + Name)

           // (c)

var myNum = 10

            // (d)

console.log("Initial value : " + myNum)

           // (e)

myNum++

           // (f)

console.log("Value after increment is : " + myNum)

          // (g)

myNum = myNum + 6

          // (h)

console.log("Value after addition is : " + myNum)

          // (i)

myNum--

           // (j)

console.log("Value after decrement is : " + myNum)

          // (k)

var remainder = myNum % 4

          // (L)

console.log("The remainder is : " + remainder)

                                // Question # 04

var tickets = prompt("How many tickets wants you buy : ")

var ticket_price = 600;

var total_price = ticket_price * tickets

console.log("Total cost of 5 tickets is : " + total_price)

                                // Question # 05

var num = prompt("Enter your table : ")

for(var i = 1 ; i <= 10 ; i++){
        console.log(num + " " + "x" + " " + i + " " + "=" + " " + num*i)
}

                                // Question # 06

var celsius = 25
var fahrenheit = (celsius * 9 / 5) + 32
console.log(celsius + " C convert in " + fahrenheit + " F")

var fahrenheit = 70
var celsius = (fahrenheit - 32) * 5 / 9
console.log(fahrenheit + " F convert in " + celsius + " C")

                                // Question # 07

var price_1 = 650
console.log("Price of item 1 is " + price_1)

var item_1 = prompt("How many items would you buy : ")
var item1 = price_1 * item_1
console.log("Quantity of item 1 is " + item_1)

var price_2 = 100
console.log("Price of item 2 is " + price_2)

var item_2 = prompt("How many items would you buy : ")
var item2 = price_2 * item_2
console.log("Quantity of item 2 is " + item_2)

var shipping_charges = 100

var total_cost =  item1 + item2 + shipping_charges
console.log("Total cost of your order is " + total_cost)


                                // Question # 08

var total_marks = prompt("Enter your total marks : ")
console.log("Total Marks is : " + total_marks)

var marks_obtained = prompt("Enter your marks : ")
console.log("Marks Obtained is : " + marks_obtained)

var percentage = marks_obtained * 100 / total_marks
console.log("Your percentage is : " + percentage)

                                // Question # 09

var US_dollar = 10

var saudi_riyal = 25

var total_currency = US_dollar * 104.80 + saudi_riyal * 28

console.log("Total currency in PKR : " + total_currency)

                                // Question # 10

var num = 10;

num = num + 5 * 10 / 2

console.log(num)

                                // Question # 11

var current_year = prompt("Enter Your current year : ");
console.log("Current Year" + current_year)

var birth_year = prompt("Enter your birth year : ");
console.log("Birth Year" + birth_year)

var age =  current_year - birth_year;
console.log("You are " + age + " years old")

                                // Question # 12

var radius = 20
console.log("radius of a circle is : " + radius)

var circumference = 2 * 3.142 * radius
console.log("The circumference of a circle is : " + circumference)

var area = 3.142 * (radius * radius)
console.log("The area of a circle is : " + area)

                                // Question # 13

var mySnack = "peanuts"
console.log("Your favourite snack is " + mySnack)

var curr_age = 20
console.log("Your current age is " + curr_age)

var max_age = 60
console.log("Your estimated maximum age is " + max_age)

var per_day = 2
console.log("Amount of snack per day " + per_day)

var total = (max_age - curr_age) * per_day
console.log("You will need " + total + " " + mySnack + " to last you until the ripe old age of " + max_age)




