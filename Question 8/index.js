/*
    Name: Prashant Agheda
	PRN No: 20180201001

	8. WAP in node.js to publish areaofrect package on official website on npm
*/

function areaOfRectangle(length, breadth)
{
    if(length <= 0 || breadth <= 0)
    {
        console.log("Length and Breadth should be POSITIVE Value");
    }
    else
    {
        var area = length * breadth;
        return area;
    }
}

module.exports.areaOfRectangle = areaOfRectangle;