// Each invoice number is constructed of 9 digits [0..9]
// Invoice number is written using _ and | characters.
// Invoice number input takes 4 lines.
// The first 3 lines contain 27 characters.
// The fourth line is blank.

const fs = require('fs'); // requiring fs module to read file

fs.readFile('me.txt', 'utf8', function(err, data){
    var newData =''; // making the variable to to put data init
    if(!err){
        let newArr = [...data] // making the data in array to get the index of the all elements
        let len = newArr.length
        // creating the function in which the loop will done on new array data and we get the index of the element
        function number_iden(val){
            let x = val -1;
            let data = newArr[x]+newArr[x+1]+newArr[x+2]+newArr[x+28]+newArr[x+29]+newArr[x+30]+newArr[x+56]+newArr[x+57]+newArr[x+58]
            return data
        }           
        // Doing final for loop for every index and get the element and sum of element will create the sructute of the number and throu this i will get pattern
                    for(let j=1; j<=len; j=j+85){
                        let blankArr =[];
                        for(let i=j; i<=j+26; i=i+3){                   
                            let x = i-1;
                            let line = newArr[x]+newArr[x+1]+newArr[x+2]+newArr[x+28]+newArr[x+29]+newArr[x+30]+newArr[x+56]+newArr[x+57]+newArr[x+58]
                            if( number_iden(8440) == line){blankArr.push('0')}
                            else if( number_iden(8416) == line){ blankArr.push('1')}
                            else if( number_iden(8331) == line){ blankArr.push('2')}
                            else if( number_iden(8161) == line){ blankArr.push('3')}
                            else if( number_iden(8349) == line){ blankArr.push('4')}
                            else if( number_iden(8346) == line){ blankArr.push('5')}
                            else if( number_iden(8267) == line){ blankArr.push('6')}
                            else if( number_iden(8264) == line){ blankArr.push('7')}
                            else if( number_iden(8425) == line){ blankArr.push('8')}
                            else if( number_iden(8437) == line){ blankArr.push('9')}
                            else{blankArr.push('some issue')}
                        }

                        // here is the final result after reading the data and creating all the numers according to the patern
                       newData += blankArr[0]+blankArr[1]+blankArr[2]+blankArr[3]+blankArr[4]+blankArr[5]+blankArr[6]+blankArr[7]+blankArr[8]+'\n'
                   }    
                   console.log(`Here are the Result\n' ${newData}`)
                }           
})















        
//         let len = newArr.length
//         // console.log(newArr)
//         // console.log(newArr.length)
//         // console.log(newArr[0]+newArr[1]+newArr[2]+'\n'+newArr[28]+newArr[29]+newArr[30]+'\n'+newArr[56]+newArr[57]+newArr[58]+'\n')


//     //  for(let j=1; j<=len; j=j+85){
//            //let j= 86
//             //for(let i=j; i<=j+26; i=i+3){
//                 let i= 8425;
//                 let x = i-1;
//                 console.log('index number '+i +'\n')
//                 console.log(newArr[x]+newArr[x+1]+newArr[x+2]+'\n'+newArr[x+28]+newArr[x+29]+newArr[x+30]+'\n'+newArr[x+56]+newArr[x+57]+newArr[x+58]+'\n\n\n')
//                 let dataZero = newArr[x]+newArr[x+1]+newArr[x+2]+newArr[x+28]+newArr[x+29]+newArr[x+30]+newArr[x+56]+newArr[x+57]+newArr[x+58]
                
//     //         }
//     //    }
//     }
// })







// for(let j=1; j<=len; j=j+85){
//     //let j= 86
//      for(let i=j; i<=j+26; i=i+3){
//          let x = i-1;
//          console.log(newArr[x]+newArr[x+1]+newArr[x+2]+'\n'+newArr[x+28]+newArr[x+29]+newArr[x+30]+'\n'+newArr[x+56]+newArr[x+57]+newArr[x+58]+'\n\n\n')
         
//      }
//  }