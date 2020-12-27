var x = 10;
console.log(x);
console.log(this.x);
// console.log(window.x);
/*
during the execution of the code js creates a global object or the window object and everything that is defined in
the global space comes in the global execution context and hence we can refer it using the this.x or window.x
*/
console.log(a);
var a = 15;
//logging a will print a as undefined as the js provided it a placeholder and 'udefined' in it
// if we use let it will throw an error as it isn't defined in the global context
// loosely typed means the data type of variable can be altered during the run time
// with an every execution context a lexical space is created or as we call it local space that have it's own space in association with its parents
// hoisting in the case of the let and const is very different than that of the var as let and const are hosted in the temporal deadzone
// const ab;
//ab=1000;
//ab=1000 will throw an error as the ab is defined as Undefined and later on we can't change it
var ab = 10;
{
  var ab = 100;
  console.log(ab);
}
console.log(ab);
// ab will print 100 in both the blocks as the reference is same
// while in the case of the let and const the values won't be changed
var bac = 10;
function ok() {
  var bac = 50;
  console.log(bac);
}
ok();
console.log(bac);
// in the case of function var too becomes the block scopic and the memory leak doesn't happen
// function + lexical scope is the closure
function okok(){
    return function(){
        console.log('abhishekvr12')
    }
}
returnedFnc=okok();
returnedFnc();
console.log(typeof(returnedFnc))
// returned function remembers its lexical scope even if the block of its scope is dismissed
 function abhi()
{
    var a=10
     function y (){
        console.log(a)
    }
    a=100
    return y
}
abhi()();
// 100 will be printed as the reference to the variable is being done not the value
  

// callbacks
function x1(y)
{
  y();
}
x1(function (){
  console.log("hi  callbacks");
})
// event loop is a continuosly running method that looks at the callback queue in order to find out is their something
// that needs to be pushed in the execution stack
// incase of he fetch something called microtask queue exist that have higher priority than callback
// hence the task in micro queue will be executed first
// all the callback that arises through the promises comes in the microtask queue and mutation observer(DOM)
