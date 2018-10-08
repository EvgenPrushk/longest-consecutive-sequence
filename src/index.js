module.exports = function longestConsecutiveLength(array) {
 /*module variables*/
let counter = 0;
let j = 0;
const longestConsecutive = new Set(array);
/*determine the maximum and minimum numbers in the array */
let minnumberArray = Math.min.apply(Math, array);
let maxnumberArray = Math.max.apply(Math, array);
/*min and max  in Array */
for (let i = minnumberArray; i <= maxnumberArray; i++ ) {
/*if i has  longestConsecutive*/
  if (longestConsecutive.has(i)){
    j++;
    /* return counter */
    if (j > counter){
      counter = j;
    }
    
  } else j = 0;

}
 return counter
 }
