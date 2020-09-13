const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  for(let i=0; i<backyard.length; i++){
      for (let str of backyard[i]) {
          if (str=='^^'){
              count++;
          }
      }    
  }
  return count;
};
