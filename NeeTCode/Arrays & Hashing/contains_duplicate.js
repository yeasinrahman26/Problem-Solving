function twoSum(num, target) {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9));

// function array(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(array([2, 7, 11, 15]));

// function bigSum(num, target) {
//   const seen = new Map();

//   for (let i = 0; i < num.length; i++) {
//     const complement = target - num[i];

//     if (seen.has(complement)) {
//       return [seen.get(complement), i];
//     }
//     seen.set(num[i], i);
//   }
// }

// console.log(bigSum([2,8,9,12],22))

function duplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }

  return false;
}

// console.log(duplicate([1, 2, 3, 4, 5, 7]));

function sortDuplicate(arr) {
  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) return true;
  }
  return false;
}
// console.log(sortDuplicate([1, 2, 3, 4, 5, 5]));

function hashDuplicate(arr) {
  debugger
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      return true;
    }
    seen.add(arr[i]);
  }

  return false;
}
console.log(hashDuplicate([1, 2, 3, 4, 5, 5]));
