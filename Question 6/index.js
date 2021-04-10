/*
    Name: Prashant Agheda
	PRN No: 20180201001

	6. WAP in node.js to implement different operations on Date using moment module.
*/


// moment module importing
var moment = require("moment");
// moment() - Internally this means we are creating a new date object
// as new Date()

// moment().format() - This means it will create date object and format it
var today = moment().format("L");
// L means display date in "MM-DD-YYYY" format
console.log("Today is", today);

var today1 = moment().format();
console.log("Date Format 1 is", today1);

var today2 = moment().format("l");
console.log("Date Format 2 is", today2);

var today3 = moment().format("ll");
console.log("Date Format 3 is", today3);

var today4 = moment().format("LL");
console.log("Date Format 4 is", today4);

var today5 = moment().format("lll");
console.log("Date Format 5 is", today5);

var today6 = moment().format("LLL");
console.log("Date Format 6 is", today6);

var today7 = moment().format("llll");
console.log("Date Format 7 is", today7);

var today8 = moment().format("LLLL");
console.log("Date Format 8 is", today8);

// LT - Time
var today9 = moment().format("LT");
console.log("Date Format 9 is", today9);

// LTS - Time with Seconds
var today10 = moment().format("LTS");
console.log("Date Format 10 is", today10);