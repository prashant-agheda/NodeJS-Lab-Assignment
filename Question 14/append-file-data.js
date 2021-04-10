/*
    Name: Prashant Agheda
	PRN No: 20180201001

	14. Using nodejs create a web page to read two file names from user and
        append contents of first file into second file.
*/

const fs = require("fs");
const prompt = require("prompt-sync")();

var file1 = prompt("Enter 1st File Name with Extension: ");
var file2 = prompt("Enter 2nd File Name with Extension: ");

// Reading File 1 Data
var file1Data = fs.readFileSync(file1, "utf8");
console.log("\nFile 1 Data is: " + file1Data);

// Reading File 2 Data
var file2Data = fs.readFileSync(file2, "utf8");
console.log("\nFile 2 Data is: " + file2Data + "\n");

// Appending Data
fs.appendFileSync(file2, file1Data);
console.log("\nData of File 1 Appended to File 2...\n");

// Reading File 1 Data After Appending
var file1Data = fs.readFileSync(file1, "utf8");
console.log("\nFile 1 Data is: " + file1Data);

// Reading File 2 Data After Appending
var file2Data = fs.readFileSync(file2, "utf8");
console.log("\nFile 2 Data is: " + file2Data + "\n");