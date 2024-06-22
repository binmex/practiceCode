function findMedian(arr) {
  // Write your code here
  let arrSorted = arr.sort((a, b) => a - b);
  let arrayLength = arrSorted.length;
  console.log(arrayLength/2)
  const mindIndex = Math.floor(arrayLength / 2);
  console.log(mindIndex)
  return arrSorted[mindIndex];
}

console.log(findMedian([11,12,14,15]));