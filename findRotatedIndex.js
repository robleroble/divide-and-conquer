// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

function findRotatedIndex(arr, num) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if ((middleVal > num && arr[leftIdx] > num) || middleVal < num) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > num) {
      rightIdx = middleIdx - 1;
    } else if (middleVal < num) {
      leftIdx = middleIdx + 1;
    } else if (middleVal === num) {
      return middleIdx;
    }
  }
  return -1;
}
