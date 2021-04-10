var moment = require("moment");

var today = moment().format("lll");
console.log("Today is", today);

var manipulatedDate = moment().add(5, "d").format("lll");
console.log("After Manipulation Date is:", manipulatedDate);

var manipulatedYear = moment().add(5, "y").format("lll");
console.log("After Manipulation Year is:", manipulatedYear);

var manipulatedMonth = moment().add(5, "M").format("lll");
console.log("After Manipulation Month is:", manipulatedMonth);

console.log("Is 2021 Leap Year ? Way 1", moment([2021]).isLeapYear());
console.log("Is 2021 Leap Year ? Way 2", moment("2021", "yyyy").isLeapYear());

// diff()
var d1 = moment("27/01/2019", "dd/mm/yyyy");
var d2 = moment("05/12/2018", "dd/mm/yyyy");
var difference = d1.diff(d2, "M");
console.log("Difference between 2 Months:", difference, "months");