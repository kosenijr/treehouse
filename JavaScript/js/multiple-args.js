// function intakes multiple parameters
function getArea(width, length, unit) {
    const area = width * length;
    return `${area} ${unit}`;
}
// call function using multiple arguments to trigger the workings of multiple parameters
getArea(10, 20, 'sq ft');
// getArea(10, 20, 'inches');
// getArea(10, 20, 'miles');
// console.log(getArea(10, 20));
