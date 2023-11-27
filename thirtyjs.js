var currency1 = 100;
var currency2 = 0;
var exchangeRate = 1.2;

function ConvertCurrency(amount, rate){
    return amount * rate;
}

currency2 = ConvertCurrency(currency1, exchangeRate);
console.log(currency2);