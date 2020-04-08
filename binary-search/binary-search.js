"use strict";

// Complete this algo
// [1, 7, 3] 3


//[1, 2, 3 , 4 , 5 , 6 ]  8
// [4, 5, 6], 8
//[5,6] ,8
// [6], 8
const binarySearch = (array, target) => {

  let middle = Math.floor(array.length / 2);

  if(array.length === 1){
	  if(array[0] === target){
      return true
    } else{
      return false
    }
  }

  if (array[middle] === target) {
    return true;
  }

  if (array[middle] < target) {
	let arrayMiddle = array.slice(middle)
	return binarySearch(arrayMiddle, target);
  } else {
	  let arrayMiddle = array.slice(0, middle)
    return binarySearch( arrayMiddle, target); 
  }

};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
