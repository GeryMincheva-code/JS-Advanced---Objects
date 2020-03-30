function solve(input){
let cappyJuices={};
let cappyBottles={};

for (const el of input) {
    let line=el.split(' => ');
    let juice =line[0];
    let juiceQuantity= Number(line[1]);  
    
    if(!cappyJuices.hasOwnProperty(juice)){
        cappyJuices[juice]=0;
       
    } 
     cappyJuices[juice]+=juiceQuantity;
    
    if(cappyJuices[juice]>=1000){
        
        cappyBottles[juice]=parseInt(cappyJuices[juice]/1000); 
    }
}
    Object.entries(cappyBottles).map(a=>console.log(`${a[0]} => ${a[1]}`));
    
    
}
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);

// Pear => 8
// Watermelon => 10
// Kiwi => 4
