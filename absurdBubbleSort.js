const readline = require('readline');
const reader = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


const askIfGreaterThan = function(el1,el2,callback){
    reader.question(`Is ${el1} greater than ${el2}?\n`, response=>{
        if (response === "yes"){
            callback(true);
        } else {
            callback(false);
        }
        // reader.close();
    })
}

const innerBubbleSortLoop = (arr, i, madeAnySwaps, outerBubbleSortLoop) => {
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan){
            if (isGreaterThan){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                innerBubbleSortLoop(arr, i + 1, true, outerBubbleSortLoop); 
            }else{
                innerBubbleSortLoop(arr, i + 1, false, outerBubbleSortLoop); 
            }
        })
    }
    else if (i == arr.length-1){
        reader.close();
        outerBubbleSortLoop(madeAnySwaps);
        return arr
    }
}

const arr = [1, 2, 5, 4]
const sort = innerBubbleSortLoop(arr, 0, false, function(){console.log('in outter bubble sort')});
// console.log(sort)



