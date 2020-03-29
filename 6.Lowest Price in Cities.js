function solve(input){
    let result={};
    for (const el of input) {
        let [town,product,price]=el.split(' | ');
        price= +(price);
        if(!result.hasOwnProperty(product)){
            result[product]={};
            result[product]['price']=price;
            result[product]['town']=town
        } else {
            if(result[product]['town']==town){
                result[product]['price']=price;
                result[product]['town']=town
            } else {
            if(result[product]['price']>price){
                result[product]['price']=price;
                result[product]['town']=town;
                }
            if(result[product]['price']=price){
                result[product]['town']=town;
            }
            }
        }
          
    }
    let printResult=Object.entries(result)
    for (const el of printResult) {
        console.log(`${el[0]} -> ${el[1]['price']} (${el[1]['town']})`);
        
    }
    //console.log(printResult);
    
    }
solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']
);