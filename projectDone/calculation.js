let x = 1 // starts with the number of 1
let y = 30 // ending number
let c =[]; // taking the array 
for(let a =x; a<=y; a++){
    if((a%7) == 0 && (a%4)==0){
        c.push('marcopolo')
    }
    else if((a%7) == 0 ){
        c.push('polo')
    }
    else if((a%4) == 0 ){
        c.push('marco')
    }else{
        c.push(a)
    }
}
let finalData = c.toString()
console.log(finalData)