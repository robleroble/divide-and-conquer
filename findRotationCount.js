// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

function findRotationCount(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (arr[leftIdx] < arr[rightIdx]) {
      console.log("0");
      return 0;
    } else if (rightIdx === leftIdx) {
      return leftIdx;
    } else if (middleIdx < rightIdx && arr[middleIdx + 1] < middleVal) {
      console.log(middleIdx + 1);
      return middleIdx + 1;
    } else if (middleIdx > leftIdx && middleVal < arr[middleIdx - 1]) {
      console.log(middleIdx);
      return middleIdx;
    } else if (arr[rightIdx] > middleVal) {
      rightIdx = middleIdx - 1;
    } else if (middleVal > arr[rightIdx]) {
      leftIdx = middleIdx + 1;
    }
  }
  console.log("uh oh");
  return -1;
}
