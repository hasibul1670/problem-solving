const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1; //8

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // mid =8

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
};

// Test
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 19];
console.log(binarySearch(arr, 16)); // Output: 5
