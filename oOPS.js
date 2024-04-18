var totalPrice = {
    shoes : 100,
    tax : 1.2,
    amount : function(){
        var calculation = this.shoes * this.tax;
        console.log("calculation : ", calculation);
    }
}
totalPrice.amount();