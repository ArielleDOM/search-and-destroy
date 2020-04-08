"use strict";

// Complete this algo
// [1, 7, 3] 3
//[1, 2, 3 , 4 , 5 , 6 ]  5
const binarySearch = (array, target) => {
  let point = 0;
  let middle = Math.floor(array.length / 2);
  let resolved = false;
  if(array.length <= 1){
	  return false 
  }
  if (array[middle] === target) {
    return true;
  }
  if (array[middle] < target) {
	let arrayMiddle = array.slice(middle)
	return binarySearch(arrayMiddle, target); //[5, 6], 5
  } else {
	let arrayMiddle = array.slice(0, middle)
    return binarySearch( arrayMiddle, target); //
  }
  ///FOR EXTRA Credit maybe use recusion?
  // if(point < array.length){
  // 	if(array[point] === target){
  // 		return true
  // 	}else{
  // 		point++
  // 		binarySearch(array, target)
  // }

  
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
