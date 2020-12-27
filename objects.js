let person = {
  name: "abhsihek",
  age: 24,
  city: "kanpur",
  additionalinfo: {
    gf: "noobs",
  },
  add: ["abhishek"],
};
person.sex = "ramusexual";
person.age = 20;
console.log(person);
delete person.age; // removes a particular property
console.log(person);
// assigning some property as null won't remove the property but the value assigned now will be null
person["address city"] = "machariya road";
console.log(person);
/*{
  name: 'abhsihek',
  city: 'kanpur',
  sex: 'ramusexual',
  'address city': 'machariya road'
}*/
person[1.5] = "hello ";
console.log(person);
for (const keys in person) {
  console.log(keys, person[keys]);
}
console.log(person.additionalinfo.gf);
const newperson = { ...person };
person.add.push("verma");
person.city = "gzb";
console.log(newperson); // doesn't effect the new person
// nested referecing will show the changes
// if we want to avoid nested referencing
const newperson2 = { ...person, add: [...person.add] };
person.add.push("gobarinsaan");
console.log(newperson2, person);
// copying via assign
// object.assign(target value,sources)
const ans = Object.assign({ skills: 0 }, person);
console.log(person);
console.log(ans);
const { city } = person; // key must be passed will destructing in case of the object
console.log(city);
// to check whether a particular property exist in the object
if ("add" in person) {
  console.log("true");
}
let pp = {
  name: "abhishek",
  getuppper: function () {
    return this.name.toUpperCase();
  },
};
console.log(pp.getuppper());
// THIS refers to the function calling it if nothing refers then refers to global execution context
// in case of the add event listener the THIS keyword refers to the DOM object that made the function call
// this in case of the arrow function doesn't bind to the sorroundings 
// this in a fnc is same as this outside the fnc         