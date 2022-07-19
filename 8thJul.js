//q1 
const obj = [
  { name: "BMW", year: "2022", model: "x7" },
  { name: "Maruti", year: "2022", model: "Baleno" },
  { name: "Hyndai", year: "2022", model: "i20" },
  { name: "toyota", year: "2022", model: "fortuner" },
];


let res = JSON.stringify(obj);
console.log(res);

//q2 recursion is not done yet

//q3
const grades = {
    first: { "name": "john", "grade": 8, "sex": "M" },
    second: { "name": "mukul", "grade": 10, "sex": "M" },
    third: {"name": "bhawna", "grade": 12, "sex": "F"}
};

let keys = Object.keys(grades);

function classAverage(keys) { 
    return keys.length / keys.length;
}

function boysAverage(keys) { 
    let count = 0;
    keys.array.forEach(element => {
        if (element.sex === "M") { 
            count++;
        }
    });
    return count / keys.length;
}

function girlsAverage(keys) {
  let count = 0;
  keys.array.forEach((element) => {
    if (element.sex === "F") {
      count++;
    }
  });
  return count / keys.length;
}

function highestGrade(keys) { 
    let grade = -1;
    keys.array.forEach((element) => {
      if (element.grade > grade) {
          grade = element.grade;
      }
    });
    return grade;
}

function lowestGrade(keys) {
  let grade = 5000000;
  keys.array.forEach((element) => {
    if (element.grade < grade) {
      grade = element.grade;
    }
  });
  return grade;
}

//q4 recursion is not done yet