import listOfStudents from "./9-hoisting.js";
/* When importing a default variable, we dont need a {} around the variable to export and import */
/* But when importing or exporting a variable other than default, the {} is required */
console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted);
