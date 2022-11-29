// // Coding Challenge 1
// let marksHeight = 1.69;
// let marksMass = 78;
// let johnsHeight = 1.95;
// let johnsMass = 92;

// let marksBMI = marksMass/ marksHeight**2;
// let johnsBMI = johnsMass/johnsHeight**2;
// let markHigherBMI = marksBMI > johnsBMI;
// console.log(marksBMI,johnsBMI,markHigherBMI)

// // Coding Challenge 2
// if(marksBMI>johnsBMI){
//     console.log(`Marks BMI ${marksBMI} is Higher than Johns BMI ${johnsBMI}`)
// }else{
//     console.log(`Marks BMI ${marksBMI} is lower than Johns BMI ${johnsBMI}`)
// }

// let money = 0;
// console.log(Boolean(money),(money===0))
// if (money) {
//     console.log("You Have Money")
// } else {
//     console.log("You Dont Have Money.")
// }

// Coding Challenge 3
let dlAvg = (300)/3;
let klAvg = (300)/3;
if (dlAvg>=100 && dlAvg >klAvg) {
    console.log("Dolphins")
} else if(klAvg>=100 && klAvg >dlAvg){
    console.log("Kolas")
}else if(dlAvg>=100 && klAvg>=100 && dlAvg === klAvg){
console.log("Tie")
}else{
    console.log("No One is Winner")
}