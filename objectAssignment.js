//1. Program to demonstrate Object destructuring in nested objects
let obj = {
    name: "Mukul",
    hobbies: {
        cricket: true,
        reading: true,
        badminton: true,
        problemSOlving:true
    }
}

let { name, hobbies } = obj;
console.log(name);
console.log(hobbies);

//Program to clone the object and change the property and then iterate the array of objects using inbuilt functions and to console the object property and frame a meaning full sentence.

let person = { ...obj };
person.name = "rahul";
let properties = Object.keys(person);
properties.forEach((el) => console.log(person[el]));