//    Methods in objects

let car = {
    make : 2020,
    model : "BMW",
    year : 2024,

    start : function(){
        console.log("The car has started")
    }
    // or we can make as ARROW
    // start : ()=>{
    //      console.log("The car has started")
    // }
    // }
}

console.log(car.make);
console.log(car.model);
console.log(car.year);

console.log(car.start());