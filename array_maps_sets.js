const number = [1, 2, 3];
console.log(number.length);
const newArray = new Array(); // contructor method called
console.log(newArray);
newArray.push("abhishek");
console.log(newArray); // [ 'abhishek' ]
const newArray2 = new Array("hi", "abhishek");
console.log(newArray2);
const newArray3 = new Array(10); // with this an empty array of the size 10 is being created
console.log(newArray3);
const newArray4 = Array(10);
console.log(newArray4); // [ <10 empty items> ]
const newarr = Array.of(2, 5);
console.log(newarr); //[2,5]
const ans = Array.from("abhsihek");
console.log(ans); /* [
    'a', 'b', 'h',
    's', 'i', 'h',
    'e', 'k'
  ]*/
// from takes an iterable and creates an array object from that one
// 2d array
const opop = [
  ["abhsihek", 1],
  ["opopopop", 2],
];
for (const data of opop) {
  for (const x of data) {
    console.log(x);
  }
}
// pop pops the last element of the array
// unshift add the element at the front of the array
opop.unshift("abhsihekvr12");
console.log(opop); // [ 'abhsihekvr12', [ 'abhsihek', 1 ], [ 'opopopop', 2 ] ]
opop.shift();
console.log(opop); // removes the  front topmost element of the array
// [ 'abhsihekvr12', [ 'abhsihek', 1 ], [ 'opopopop', 2 ] ]
opop[6] = "noobifdy";
console.log(opop);
// [ [ 'abhsihek', 1 ], [ 'opopopop', 2 ], <4 empty items>, 'noobifdy' ]
console.log(opop[8]);
// undefined
const ul = ["abhsihek", "ashu", "ramu"];
// splice method
// ul.splice(starting index of deleting items, number of items we wanna delete);
// ul.splice(starting index of deleting items, number of items we wanna delete,replacement of the deleted items);
ul.splice(0, 0, "ramu is a hackar");
console.log(ul);
// [ 'ramu is a hackar', 'abhsihek', 'ashu', 'ramu' ]
ul.splice(1, 0, "varma  is a hackar");
console.log(ul);
// added the 1st index of the array and one right shift occurs
ul.splice(0, 1);
console.log(ul);
// removal of the element at 0 index
// ul.splice(0) will delete all the items of the particular array
// splice returns the deleted elements of the array
// works with -ve index

// slice
const test = [1, 2.2, 5.5, 9, 25];
const test1 = test.slice(0, 2); // returns copy not the reference
console.log(test1); // [ 1, 2.2 ]
// array are referenced unless copied
// if no args passed simply copies the array
// works with the -ve indexed args
const test2 = test.slice(-3, -1);
console.log(test2);
// concat combine two arrays
const tt = test.concat([10, 20, 30]);
test[0] = "abhsihek";
console.log(tt); // no changes of test in the tt array
console.log(test);
// returns a brand new array copied
console.log(test.indexOf(2.2));
// 2nd arg in case of indexof is the starting index to begin search with
console.log(test.lastIndexOf(25));
// returns -1 if element is not find
// indexof only works with the primitive values not the reference eg array of objects(object are reference)
const tts = [{ name: "abhishek" }, { name: "abhisheke2" }];
console.log(tt.indexOf({ name: "abhishek" }));
// -1 is printed
const ff = tts.find((person, index, persons) => {
  return person.name === "abhishek";
});
console.log(ff); // reference is passed changes made will reflect
const ff1 = tts.findIndex((person, index, persons) => {
  return person.name === "abhisheke2";
});
console.log(ff1);
// array.includes returns true if the element is present else false
const arr = [40, 20, 100, 40, 30];
arr.forEach((obj, index, arr) => {
  console.log(obj);
});
// console.log(arr);
// MAP
const yu = arr.map((obj, index, arr) => {
  return obj * 20;
});
console.log(yu, arr); // [ 200, 400, 600, 800, 1000 ] [ 10, 20, 30, 40, 50 ]
//map for every element of the array returns the trasnformed element
// sorting
console.log("SORTING");
console.log(arr); // [ 40, 20, 100, 40, 30 ]
const sortedArr = arr.sort(); // [ 100, 20, 30, 40, 40 ]
console.log(sortedArr, arr);
// [ 100, 20, 30, 40, 40 ] reason for the o/p this is js convert everything to be string and then sort them in the lexicographical way
const realsorted = arr.sort((a1, b1) => {
  const a = parseInt(a1);
  const b = parseInt(b1);
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
console.log(arr, realsorted);
// sorting makes the changes in the real array too
// FILTER
const filtered = arr.filter((obj, index, arr) => obj > 40);
console.log(filtered);
// REDUCE
let initialvalue = 0;
const sumofarray = arr.reduce((prevalue, curvalue, index, arr) => {
  return prevalue + curvalue;
}, initialvalue);
console.log(sumofarray);
// JOIN AND SPLIT
const datafetched = "hi:name:abhishek:kanpur";
console.log(datafetched.split(":")); // [ 'hi', 'name', 'abhishek', 'kanpur' ]
// returns an array of strings seperated via the passed delimeter
const namefrag = ["abhishek", "verma"];
let ooo = namefrag.join(":");
console.log(ooo); // abhishek:verma
// spread operator
const yuy = [...namefrag]; // copied array not reference
console.log(Math.min(...arr)); // 20
const objperson = [
  { name: "abhishek", age: 19 },
  { name: "ramu", age: 30 },
];
const newperson = [...objperson];
// adding of the new obj in theobjperson won't reflect in the newperson but the changes in the existing will reflect as they are referenced
// address of the object are copied not the actual object
objperson[0].age = 25;
console.log(objperson[0].age, newperson[0].age); // 25 25
// inorder to create a copy object
const copyperson = [
  ...objperson.map((person) => ({ name: person.name, age: person.age })),
];
console.log(copyperson);
// array destructuring
const nameff = ["abhishek", "verma", 19, "kanpur"];
const [a, b, ...rest] = nameff;
console.log(a, b); // abhishek verma
console.log(rest); // [ 19, 'kanpur' ]

// maps & sets
const sets = new Set(); // can pass any iterable, index based access not allowed
sets.add(1);
sets.add(2);
sets.add(2);
console.log(sets); // Set(2) { 1, 2 }
// set.has(value) to find the value
// set.delete(value) to delete one
const setarr = Array.from(sets);
console.log(setarr); // [ 1, 2 ]
console.log(sets.size);
// maps
const x1={name:"abhishke"};
const x2={name:"ramu"};
const persondata=new Map([[x1,[{date:"10",day:"yes"}]]]);
console.log(persondata.get(x1));
// map.set(key,value) used to add key value pair to the app
persondata.set(x2,[{day:"today"}]);
for(const [key,val] of persondata)
{
  console.log(key, val);
}
for(const key of persondata.keys())
{
  console.log(key);
}