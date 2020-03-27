function solve(input){
    let result={};
    let pattern=/[^A-Za-z_0-9]+/;
    let text=input.join().split(pattern).filter(w=> w!='');
    for (const el of text) {
        if(!result.hasOwnProperty(el)){
            result[el]=1;
        } else{
            result[el]++;
        }
    }
    console.log(JSON.stringify(result));
    
}
solve(['JS devs use Node.js for server-side JS.-- JS for devs']);