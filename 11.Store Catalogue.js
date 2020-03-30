function solve(input){
 let sortArr=input.sort((a,b)=>a.localeCompare(b));
 let catalogue ={};
 for (const el of sortArr) {
     let keyWord = el[0];
     let product=el.split(' : ')[0];
     let price=el.split(' : ')[1];
    if(!catalogue.hasOwnProperty(keyWord)){
        catalogue[keyWord]={};
    }
    catalogue[keyWord][product]=price;     
 }
 let print=Object.entries(catalogue);
 print.map(a=>{
    let products=Object.entries(a[1]);
    console.log(a[0]);
    products.forEach(element => {
        console.log(`  ${element[0]}: ${element[1]}`);
        
    });   
 });

}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);

// A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499
