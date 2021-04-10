/*
    Name: Prashant Agheda
	PRN No: 20180201001

	5. WAP in node.js to create following modules-
       Fun.js – Contains the function that checks whether given number is prime or not
       Msg.js – Contains message "D Y Patil International University"
       Obj.js- Contains book object.
       Test.js – Include fun.js, msg.js, and object.js modules in test.js module. And access prime function, message and object from test.js module.
       Execute test.js file and display the output.

*/

function is_prime(number)
{
    var isPrime = false;

    if (number === 1)
    {
        console.log("1 is neither Prime nor Composite Number");
    }
    else if (number < 1)
    {
        console.log("Number is NOT a PRIME Number");
    }
    else if (number === 2)
    {
        console.log("2 is ONLY EVEN Prime Number");
    }
    else
    {
        for(var i = 2; i < number; i++)
        {
            if(number % i == 0)
            {
                isPrime = false;
                break;
            }
        }

        if(isPrime === true)
        {
            console.log(number, "is a PRIME Number");
        }
        else
        {
            console.log(number, "is NOT a PRIME Number");
        }
    }
}

// Calling Function
is_prime(2);

// Exporting is_prime()
module.exports = { is_prime };