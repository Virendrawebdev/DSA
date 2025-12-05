// sum of two number a and b is 10 and 20

function sum(a,b){
    return console.log(`sum ${(a+b)}`)
}
sum(10,20);

// -----------------------------------------------------------------------------------------------------

// greet the user (Hello Shery you are age years old.)  let name="Shery"; and let age=21;

function greet(name, age){
  return console.log(`Hello ${name} you are ${age} years old.`)
}
greet("virendra", 24);
greet("Shery",21);

// -----------------------------------------------------------------------------------------------------
// swap two number  1st method
function swap(a,b){
  console.log(a,b); //no swaping
  temp =a
  a=b
  b=temp
  console.log(a,b);  //after swaping
  
}
swap(10,20);

//  swaping another method 2nd method
function swap(a,b){
  console.log(a,b); //no swaping
  a=a+b
  b=a-b
  a=a-b
  console.log(a,b);  //after swaping
  
}
swap(15,25);

//  swaping destructuring array method 3rd method. Eg1 input 5 10   output 10 5
function swap(a,b){
  console.log(a,b);//no swaping
  [a,b] = [b,a]
  console.log(a,b);  //after swaping
  
}
swap(5,10);

// -----------------------------------------------------------------------------------------------------
 //Write a program that accepts two integers as input and swaps their values. after swaping, return the new values of 
// the two numbers 
// Eg1 input 5 10   output 10 5
// Eg2 input 0 0   output 0 0

function swapNumbers(a, b) {
  // console.log(`${[a,b]}`);
  console.log(a,b);
  [a,b]=[b,a];
  // return console.log(`${[a,b]}`)
 return console.log(a,b); 
}
swapNumbers(0,0);




// Compound Interest Calculation
// Accept the principal amount(p), annual interest rate(r), the number of the years(t), and number of times is 
// compounded per year(n) write a program to calculate the compound Interest. the formula to calculate compound 
// interest is:  A= P(1 + r/n)^(n*t)  input: 1000, 0.5, 10, 4  output:110199.00

function compoundInterest(P,r,t,n){
    const  A = P*Math.pow((1 + r/n),(n*t)); 
   return  console.log((A-P).toFixed(2));
}
compoundInterest(1000, 0.5, 10, 4);
compoundInterest(1500, 0.04, 6, 2);
 
