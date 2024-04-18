const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)

let sag = new Map();
sag.set(1,"Sagar");
sag.set(2,"Sunar");

console.log(sag.get(1));