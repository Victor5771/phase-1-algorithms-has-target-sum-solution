function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here:
  Time complexity: O(n)

  Add your pseudocode here:
  create an empty Set called seenNumbers
  iterate over the array of numbers
    calculate the complement (target - number)
    check if the complement exists in seenNumbers using .has
      if it exists, return true
    add the current number to seenNumbers using .add
  if the loop finishes without finding a pair, return false

  Add written explanation of your solution here:
  This function uses a Set data structure to efficiently check if there are two numbers in the input array that add up to the target number. It iterates through the array, calculating the complement of each number (the number needed to reach the target). If it finds a complement that is already in the Set, it returns true, indicating that a pair of numbers was found. If it reaches the end of the loop without finding a pair, it returns false, indicating that no such pair exists.

  The time complexity of this solution is O(n) because it iterates through the array once, and Set operations like .has and .add have an average time complexity of O(1). The space complexity is also O(n) because, in the worst case, it stores all the numbers from the array in the Set.
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
