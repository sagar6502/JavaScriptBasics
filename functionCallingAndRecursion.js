var counter = 3;
function example(){
    console.log("Recursion");
    if(counter === 0){
        return;
    }
    counter = counter -1;
    example();
}
example();
