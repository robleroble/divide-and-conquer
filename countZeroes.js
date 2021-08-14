// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

function countZeros(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    console.log("middleIdx", middleIdx);
    let middleVal = arr[middleIdx];
    if (arr[0] === 0) {
      return arr.length;
    } else if (arr[arr.length - 1] === 1) {
      return 0;
    } else if (middleVal === 0 && arr[middleIdx - 1] === 0) {
      rightIdx = middleIdx - 1;
      console.log("change right Idx", rightIdx);
    } else if (middleVal === 1 && arr[middleIdx + 1] === 1) {
      leftIdx = middleIdx + 1;
      console.log("change left Idx", leftIdx);
    } else if (middleVal === 0 && arr[middleIdx - 1] === 1) {
      return rightIdx - middleIdx + 1;
    } else if (middleVal === 1 && arr[middleIdx + 1] === 0) {
      return arr.length - middleIdx;
    }
  }
}
