function solve(input){
let result={};
for (const el of input) {
    let [town,population]=el.split(' <-> ');
    if(!result.hasOwnProperty(town)){
        result[town]= +(population)
    } else{
        result[town]+= +(population)
    }
  
}
let print = Object.entries(result);
for (const el of print) {
    console.log(`${el[0]} : ${el[1]}`);
    
}
}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

);