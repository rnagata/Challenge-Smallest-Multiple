/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here
  let numberToBeDivided = 1;
  let smallestNumber;
  let noRemainders = false;
  
  while (!noRemainders){
    for (i = 1; i <= ceiling; i++){
      if (numberToBeDivided % i !== 0){
        break;
      }
      if (i === ceiling){
        smallestNumber = numberToBeDivided;
        noRemainders = true;
      }
    }
    numberToBeDivided++;
  }

  return smallestNumber;
};