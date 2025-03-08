// 1. Calculate area of a rectangle
function calculateRectangleArea(length, width) {
    let area_rectangle = length * width;
    
    console.log(`Length: ${length}, Width: ${width} → Area = ${area_rectangle}\n`);
}


// 2. Calculate diameter, circumference, and area of a circle
function calculateCircle(radius) {
    let diameter = 2 * radius;
    let circumference = Math.PI * diameter;
    let area_circle = Math.PI * radius * radius;
    
    console.log(`Radius: ${radius} → Diameter: ${diameter}, Circumference: ${circumference.toFixed(4)}, Area: ${area_circle.toFixed(4)}\n`);
}


// 3. Calculate the third angle of a triangle
function calculateThirdAngle(angle1, angle2) {
    let angle3 = 180 - (angle1 + angle2);
    
    console.log(`Given angles: a = ${angle1}°, b = ${angle2}° → The third angle is: ${angle3}°\n`);
}


// 4. Calculate the difference between two dates in days
function calculateDateDifference(date1, date2) {
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Math.round (Difference_In_Time / (1000 * 3600 * 24));
    
    console.log(`Days difference between ${date1.toDateString()} and ${date2.toDateString()} → ${Difference_In_Days} days\n`);
}

// 5. Display initials in uppercase
function displayInitials(name) {
    let initials = name.split(' ').map(word => word.charAt(0)).join('');
    
    console.log(`Initials of ${name}: ${initials}\n`);
}

console.log("1. Find the area of a rectangle");
calculateRectangleArea(5, 3);

console.log("2. Find the diameter, circumference, and area of a circle");
calculateCircle(5);

console.log("3. Find the third angle of a triangle");
calculateThirdAngle(80, 65);

console.log("4. Find the difference between two dates");
calculateDateDifference(new Date('03/19/2023'), new Date('03/21/2023'));

console.log("5. Display initials");
displayInitials('John Doe');