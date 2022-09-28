
const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addNumbers = function(sum, numsLeft, completionCallBack){
  if (numsLeft > 0){
    rl.question('Give me a numba\n', response => {
      sum += parseInt(response);
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallBack);
    })
  }
  else{
    completionCallBack(sum);
    rl.close();
  }
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
