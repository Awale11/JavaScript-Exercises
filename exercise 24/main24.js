// Default Parameters

//Create a function calculateArea that takes width and height as parameters and returns the area. If no height is provided, it should default to width (for calculating the area of a square).

function calculateArea (width,height=width) {
    console.log(`Total Area: ${width*height}`);
}

calculateArea(10);

// calculateArea(5,5/ here widht= 5,height=5/ waa hadii both of them aan ubaasno);

// also we can use (Retun) it gives the same result.

// function calculateArea(width,height = width) {
//     return width * height;
// }
// console.log(calculateArea(10,15));
// console.log(calculateArea(5,));



