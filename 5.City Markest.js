function solve(input){
    let result={};
    for (const el of input) {
        let [town,product,amount] = el.split(' -> ');
        let [amountOfSales,pricePerUnit]=amount.split(' : ');
        if(!result.hasOwnProperty(town)){
            result[town]={};            
        }
        if (!result[town].hasOwnProperty(product)) {
            result[town][product]= +(amountOfSales)* +(pricePerUnit);
        } else{
            result[town][product]+= +(amountOfSales)* +(pricePerUnit);
        }        
    }
    let townPrint=Object.entries(result);
    for (const el of townPrint) {
        let town=el[0];
        console.log(`Town - ${town}`);        
        let products=Object.entries(el[1]);
        for (const product of products) {
            console.log(`$$$${product[0]} : ${product[1]}`);
            
        }

    }
    //console.log(townPrint);
    
}
solve(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3']
);