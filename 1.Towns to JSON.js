function solve(input){
let result=[];
for (const el of input.splice(1)) {
    let info=el.split('|').filter(x=>x!=='');
    let resultOnj={
        Town:info[0].trim(),
        Latitude: Number(Number(info[1]).toFixed(2)),
        Longitude: Number(Number(info[2]).toFixed(2))
    }
    result.push(resultOnj) 
    
}
console.log(JSON.stringify(result));
}
solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);