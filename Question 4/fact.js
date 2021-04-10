/*
    Name: Prashant Agheda
	PRN No: 20180201001

	4. WAP in node.js to create fact.js module which contains definition of fact()
       and export fact() in another test.js module and call fact().
       [Hint: use exports property of module object]
*/

function fact(number)
{
    if (number < 0)
    {
        console.log("Factorial for Negative Number does NOT exist");
    }
    else if (number === 0 || number === 1)
    {
        console.log("Factorial of", number, "is 1");
    }
    else
    {
        var fact = 1;
        for(var i = 1; i <= number; i++)
        {
            fact = fact * i;
        }
        console.log("Factorial of", number, "is :", fact);
    }
}

// Calling fact()
fact(5);

// Exporting fact()
module.exports = fact;