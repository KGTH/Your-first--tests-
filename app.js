

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))




let oneEuroIs = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8, 
}
 

let fromEuroToDollar = function(euro){

    let dollar = euro *1.2;

    return dollar;

    }

    let fromDollarToYen = function(dollar){

        let yen = dollar/1.2 *127.9;
        return yen ;
    }


    let fromYanToPound = function(yen){

  let pound = yen /127.9 * 0.8;
     return pound;  

    }
    module.exports = { sum, fromDollarToYen , fromEuroToDollar ,fromYanToPound};
    