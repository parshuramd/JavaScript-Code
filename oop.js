class Vehicle{
    constructor(){
        console.log("Hi I am ParshuRam")
    }
    setAge(){
        console.log("My Age is 26")
    }
    static setcourse(){
        console.log("My Course is BE")
    }
}
let obj = new Vehicle();
obj.setAge();
Vehicle.setcourse();