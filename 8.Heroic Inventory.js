function solve(input){
let result=[];
for (const el of input) {
    let line=el.split(' / ');
    let items=[];
    if(line.length>2){
        items=line[2].split(', ');
    }
    
    result.push({
        'name':line[0],
        'level':Number(line[1]),
         'items':items
    });
    
}
console.log(JSON.stringify(result));

}
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);

// //[{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},
// {"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
// {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]