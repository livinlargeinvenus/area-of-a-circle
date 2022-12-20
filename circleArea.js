// pi value
const PI = Math.PI;

// In geometry, the area enclosed by a circle of radius r is π*r^2
const areaOfCircle = (radius) => {
    let area = PI * radius * radius; // area of a circle
    return area.toFixed(3); // round a number to 3 decimal places
}

// the arguments from the input are
arguments = process.argv.slice(2).map(Number);

// display of circle area on console
console.log(
    `Yarıçapı ${arguments[0]} olan dairenin alanı: ${areaOfCircle(...arguments)}`
);