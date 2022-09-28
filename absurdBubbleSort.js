const readline = require('readline');
const reader = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


const askIfGreaterThan = function(el1,el2,callback){
    reader.question(`Is ${el1} greater than ${el2}?`, response=>{
        if (response === "yes"){
            callback(true);
        } else {
            callback(false);
        }
        reader.close();
    })
}

console.log(askIfGreaterThan(1,2,function(bool){
    if (bool){
        console.log("cool")
    } else {
        console.log("not cool")
    }
}));
