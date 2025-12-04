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

//  swaping destructuring array method 3rd method
function swap(a,b){
  console.log(a,b);//no swaping
  [a,b] = [b,a]
  console.log(a,b);  //after swaping
  
}
swap(30,20);

// -----------------------------------------------------------------------------------------------------




