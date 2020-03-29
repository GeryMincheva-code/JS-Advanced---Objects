function solve(input){
let result= new Set();
for(const el of input){
    let line=el.toLowerCase().split(/\W+/).filter((w)=>w!='');
    for (const word of line) {
        result.add(word);
    }
    
    
}
let printResult=Array.from(result.keys());
console.log(printResult.join(', '));


}
solve(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.', 
'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 
'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.', 
'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 
'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 
'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']
)