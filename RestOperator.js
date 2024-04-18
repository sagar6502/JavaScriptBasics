// const [] = top;
// const [first, second, third, ...secondVisit] = top;

function taxAddPrices(taxRate, ...itemBought){
    return itemBought.map(item =>  taxRate*item);
}

let shoppingCart = taxAddPrices(1.2, 10,20,30,40);
console.log(shoppingCart);