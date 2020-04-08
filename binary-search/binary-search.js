'use strict';

// Complete this algo
// [1, 7, 3] 3
const binarySearch = (array, target) => {
	let point = 0

	while(point < array.length){
		if(array[point] === target){
			return true
		}else {
			point++
		}
	}

///FOR EXTRA Credit maybe use recusion?
	// if(point < array.length){
	// 	if(array[point] === target){
	// 		return true
	// 	}else{
	// 		point++
	// 		binarySearch(array, target)
	// 	}
	// }

	return false
};


/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch