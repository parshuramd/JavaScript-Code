// let a = 11;
// function hello() {
//     if (a < 10) {
//         console.log("Hello Its Working Fine")
//     }
//     else {
//         console.log("Everything is messed up")
//     }
// }
// hello();
function callback() {
  console.log("I am CallBack Function");
}
function add(callback) {
  callback();
  console.log("I am normal");
}
add(callback);
