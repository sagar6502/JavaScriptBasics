const car = {
    speed : "fast",
    color : "red",
    price: 1231000
}

const carObject = Object.create(car);
carObject.color = "blue"; 
console.log("The carObject : ", carObject);

for(prop in carObject){
    console.log(prop);
}

console.log("Iterating over Object :: ");

for(prop of Object.keys(carObject)){
    console.log(prop+ " : "+carObject[prop]);
}