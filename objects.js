const student = {
  firstName: "Parshuram",
  lastName: "Dadas",
  age: 2022 - 1996,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(student["fullName"]());

console.log(student);
