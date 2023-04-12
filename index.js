function hasTargetSum(array, target) {
  // Create a Set to store the complements of each element in the array
  const complements = new Set();
  
  // Iterate over each element in the array
  for (const num of array) {
    // Check if the complement of the current element is in the Set
    if (complements.has(target - num)) {
      // If so, we have found a pair of numbers that add up to the target
      return true;
    }
    
    // Otherwise, add the current element's complement to the Set
    complements.add(num);
  }
  
  // If we iterate over the entire array without finding a pair that adds up to the target, return false
  return false;

}

/* 
 O(n)
*/

/* 
  Create a Set to store the complements of each element in the array
Iterate over each element in the array
Check if the complement of the current element is in the Set
If so, we have found a pair of numbers that add up to the target
Otherwise, add the current element's complement to the Set
If we iterate over the entire array without finding a pair that adds up to the target, return false

*/

/*
The hasTargetSum function creates a Set called complements to store 
the complement of each element in the array. It then iterates over each element in the array, 
checking if the complement of the current element is in the Set. If it is, the function returns 
true because we have found a pair of numbers that add up to the target. If the complement is not 
in the Set, the function adds the current element's complement to the Set. If we iterate over the entire
 array without finding a pair that adds up to the target, the function returns false.
*/

// You can run `node index.js` to view these console logs
  if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  }

  module.exports = hasTargetSum;
