// var is global and function scopic(memory leak)
// let and const is only block scopic
// function inside an object
const person = {
  name: "Abhishek",
  age: 25,
  getAgeAfter: function (x) {
    console.log(this.age);
    return this.age + parseInt(x);
  },
};
console.log(person.getAgeAfter(15));
// in case of using the arrow fnc this.age returns undefined
var arr = [10, 20, 30];
var ans = arr.filter((obj) => {
  if (obj > 15) {
    return 1;
  }
});
console.log(ans);
// passing out the unknown number of parameters(rest operator)
const sumUp = (...arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("using of operator");
  for (const num of arr) {
    console.log(num);
  }
  return sum;
};
// alternative of rest
// doesn't work with arrow fnc at arrow was port of ES6
const subUp = function () {
  let sub = 0;
  for (const obj of arguments) {
    //console.log(obj);
    sub -= obj;
  }
  return sub;
};
console.log(sumUp(1, 2, 3));
console.log(subUp(1, 2, 3));
// spread operator
var arr = [11, 12, 13];
var op = [...arr]; // spreading up the value of the array in the []
console.log(op);

//arrays and object comparison in case of === and == doesn't hold out as they have different references
// only the NULL , 0 , undefined , empty strings, NAN are treated as false in javascript

// '!!' negates the already negated value !!"" => will return a fasly value falsy->true->falsy(real false in boolean)
let opp = "";
const pname = opp || "max";
console.log(pname);
// if op is a falsy value name will be defined as Max else will be defined as the value in the op
const lname = opp && "max";
// return max is op is also a true value else returns the op if op holds a falsy value
// switch statements
let ch = "1";
switch (ch) {
  case "1":
    console.log("in the a case");
  // break;
  case "2":
    console.log("in the second case");
    break;
  default:
    console.log("in the default");
    break;
}
// under the switch case in case the condition on the basis of the === operator(value and type)
// if break isn't defined the next cases will be executed unless without the condition being checked unless a break is met
// for of
/*
for(let element of array)
{
  console.log(element);
}
*/
// for in
/*
for(let key in object)
{
  console.log(key);
  console.log(obj[key]);
}
*/
try {
  let x = 5;
  // console.log(typeof(x));
  if (typeof x == "Number") {
    console.log("No error");
  } else {
    throw { message: "the input must be of the number " };
  }
} catch (err) {
  console.log(err.message);
}

// module of ES
// var is function scopic variable
// let and cons are the block scopic variables
{
  let name = "abhsihek";
  console.log(name);
  var name3 = "nooby";
}
//console.log(name); throws an error as the let is block scopic and can't be accessed outside the block
// while in the case of the name3 it's of var type and hence memory leak will happen
// as the var are only function scopic kind of variables
console.log(userName);
var userName = "abhisohek";
//hoisting
// while in the of let and const it throws an error because the var posses special powers
// in the case of js var is pulled at the top and is initialized with the undefined
// while in the case of the let and const they are pulled up but aren't defined with any particular value hence reference error
// redeclaration of same variable in the case of the var works out but in the case of let it throws an error

// variables
// the predefined data-types eg- Number,string, boolean, Null, undefined and symbol are part of primitive data types
// in case of primitive data type if make copy of one into another a copy of the value is transfered not the reference to it
let names = "abhsihek";
let iopname = names;
names = "abhishekvr12";
// the value of iopname don't change as the actual value is being passed not the pointer to it
// in case of the reference the pointer to the value is passed and the change in one makes difference in the other one too.eg- array and objects
let per = {
  name: "opopopop",
};
let pre = per;
per.name = "okokokokjs";
console.log(pre.name);
// in order to copy the actual value not just the pointer(spread opertor helps)
let yyy = { ...pre };
pre.name = "pppppp";
console.log(yyy);
// now the value in yyy doesn't change with the change of the value of the pre
let p1 = { name: "abhsihek" };
let p2 = { name: "abhsihek" };
console.log(p1 === p2); // because the reference to the object or the pointer pointing are at diff. memory location
let p3 = { name: "abhsihek" };
let p4 = p3;
console.log(p3 === p4); // points at same memory location
//const type array and objects can be manipulated

// functions
// function declaration
function ab() {}
// function expression
const abc = function () {};
// the main diff btw the expression and the declaration is the hoisting part in the case of
// declaration part the function can be called in any way above or below the declaration
// while in the expression the hoisting comes in and if the var keyword is used is defined as undefined
// arrow functions
let abv = (ab) => {
  console.log(ab);
};
abv("hey");
// in case of the arrow fnc if the right side is single expression we can omit the {} and the return key word
var ar = [12, 21, 11, 0, 35];
let ans0 = ar.filter((obj) => obj > 12);
console.log(ans0);
// in the js is params aren't passed any value it uses undefined as default value
// defaut args only works with undefined in case of js not with other falsy values
// function(x,y,z=10)
// function(x=21,y,z) also holds true in case of the js

//bind operator
const combine = (resulthandler, operation, ...numbers) => {
  if (operation == "ADD") {
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
    resulthandler(sum);
  } else {
    let sub = 0;
    for (const num of numbers) {
      sub -= num;
    }
    resulthandler(sum);
  }
};
const showresult = (message, result) => {
  console.log(message + " " + result);
};
combine(
  showresult.bind(this, "the result after the add is"),
  "ADD",
  10,
  20,
  30
);
// in case of the bind fnc the args you bind with come at first while the args you associate vai self comes next and in the order


