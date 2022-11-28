let marksHeight = 1.69;
let marksMass = 78;
let johnsHeight = 1.95;
let johnsMass = 92;

let marksBMI = marksMass/ marksHeight**2;
let johnsBMI = johnsMass/johnsHeight**2;
let markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI,johnsBMI,markHigherBMI)