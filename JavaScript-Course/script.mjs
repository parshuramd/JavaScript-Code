// // // // // Coding Challenge 1
// // // // let marksHeight = 1.69;
// // // // let marksMass = 78;
// // // // let johnsHeight = 1.95;
// // // // let johnsMass = 92;

// // // // let marksBMI = marksMass/ marksHeight**2;
// // // // let johnsBMI = johnsMass/johnsHeight**2;
// // // // let markHigherBMI = marksBMI > johnsBMI;
// // // // console.log(marksBMI,johnsBMI,markHigherBMI)

// // // // // Coding Challenge 2
// // // // if(marksBMI>johnsBMI){
// // // //     console.log(`Marks BMI ${marksBMI} is Higher than Johns BMI ${johnsBMI}`)
// // // // }else{
// // // //     console.log(`Marks BMI ${marksBMI} is lower than Johns BMI ${johnsBMI}`)
// // // // }

// // // // let money = 0;
// // // // console.log(Boolean(money),(money===0))
// // // // if (money) {
// // // //     console.log("You Have Money")
// // // // } else {
// // // //     console.log("You Dont Have Money.")
// // // // }

// // // // Coding Challenge 3
// // // // let dlAvg = (300)/3;
// // // // let klAvg = (300)/3;
// // // // if (dlAvg>=100 && dlAvg >klAvg) {
// // // //     console.log("Dolphins")
// // // // } else if(klAvg>=100 && klAvg >dlAvg){
// // // //     console.log("Kolas")
// // // // }else if(dlAvg>=100 && klAvg>=100 && dlAvg === klAvg){
// // // // console.log("Tie")
// // // // }else{
// // // //     console.log("No One is Winner")
// // // // }

// // // // Coding Challenge 4

// // // let bill = 400;
// // // let tip = bill >= 50 && bill <=300 ? bill*0.15 : bill*0.2;
// // // console.log(tip)

// // // function calAddition(a,b,c) {
// // //     return a + b + c ;
// // // }
// // // console.log(calAddition(1,2,3))

// // // // coding challenge 1

// // // const calcAvg = (a,b,c)=> (a+b+c)/3;
// // // let kolasScore = calcAvg(22,44,66);
// // // let dolphinsScore =calcAvg(11,22,33);
// // // const checkWinner = (kolasScore,dolphinsScore)=>{
// // //     if(kolasScore>= 2*dolphinsScore){
// // //         console.log("Kolas win")
// // //     }else if(dolphinsScore>= 2*kolasScore){
// // //         console.log("dolphins win")
// // //     }else{
// // //         console.log("Tie")
// // //     }
// // // }
// // // checkWinner(kolasScore,dolphinsScore)
// // const calcTip = (bill)=>{
// //     return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
// // }
// // const bills = [125,555,44];
// // const tip = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// // const totalBill = [bills[0]+tip[0],bills[1]+tip[1],bills[2]+tip[2]];
// // console.log(totalBill,tip)
// // Coding Challenge 3
// const mark = {
//     fullName : "Mark Miller",
//     weight : 78,
//     height : 1.69,
//     calcBMI : function(){
//         this.BMI = Math.round((this.weight)/(this.height*this.height));
//         return this.BMI;
//     }
// }
// const john = {
//     fullName : "John Smith",
//     weight : 92,
//     height : 1.95,
//     calcBMI : function(){
//         this.BMI = Math.round((this.weight)/(this.height*this.height));
//         return this.BMI;
//     }
// }
// // john.calcBMI();
// // mark.calcBMI();
// if(john.BMI > mark.BMI){
//     console.log(`${john.fullName}'s BMI is ${john.calcBMI()} higher than ${mark.fullName}'s
// BMI ${mark.calcBMI()}`)
// }else{
//     console.log(`${john.fullName}'s BMI is ${john.calcBMI()} lower than ${mark.fullName}'s
// BMI ${mark.calcBMI()}`)
// }

// Coding Challenge 4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// for (let index = 0; index < bills.length; index++) {
//   // console.log(bills[index])
//   let tip =
//     bills[index] >= 50 && bills[index] <= 300
//       ? bills[index] * 0.15
//       : bills[index] * 0.2;
//   tips.push(tip);
//   totals.push(bills[index] + tip);
// }
// console.log(bills);
// console.log(tips);
// console.log(totals);

// "use strict";
// import * as data from "../../JavaScript-Course/data.json";
// console.log(document.querySelector(".message"));
// let myName = "Tushar";
// let infoObject = {
//   ...data.info,
//   info: {
//     name: myName,
//   },
// };
// console.log("info", infoObject);
// console.log(this);
