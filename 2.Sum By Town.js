function solve(input){
    let result={};
    input.forEach((el,index,arr)=>{
        if(index%2==0){
            let income=+(arr[index+1])                                  
            if(!result.hasOwnProperty(el)){
            result[el]=income;                      
            } else {
                result[el]+=income;
            }
        } 
    })
    console.log(JSON.stringify(result));
    
}
solve(['Sofia',
'20',
'Varna',
'3',
'Sofia',
'5',
'Varna',
'4']
);