// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

function findFloor(arr, num) {
  leftIdx = 0;
  rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    middleIdx = (rightIdx - leftIdx) / 2;
    middleVal = arr[middleIdx];

    if (arr[rightIdx] <= num) {
      console.log(arr[rightIdx]);
      return arr[rightIdx];
    } else if (middleVal === num) {
      console.log(middleVal);
      return middleVal;
    } else if (middleVal > num) {
      rightIdx = middleIdx - 1;
    } else if (middleVal < num && arr[middleIdx + 1] < num) {
      leftIdx = middleIdx - 1;
    } else if (leftIdx === rightIdx) {
      console.log(leftIdx);
      return arr[leftIdx];
    }
  }
  return -1;
}
