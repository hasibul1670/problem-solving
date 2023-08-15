const maxSubarraySum = (arr) => {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = currentSum + arr[i];

    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};
console.log(maxSubarraySum([-4,-5,-1,12]));
