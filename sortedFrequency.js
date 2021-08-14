// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

function sortedFrequency(arr, num) {
  //  index where target number first and last occurs
  let firstNumIdx = findIdxForFirst(arr, num);
  let lastNumIdx = findIdxForLast(arr, num);
  if (firstNumIdx === -1) {
    return -1;
  }
  return lastNumIdx - firstNumIdx + 1;
}

function findIdxForFirst(arr, num) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal > num) {
      rightIdx = middleIdx - 1;
    } else if (middleVal < num) {
      leftIdx = middleIdx + 1;
    } else if (middleVal === num && arr[middleIdx - 1] === num) {
      rightIdx = middleIdx - 1;
    } else if (middleVal === num && arr[middleIdx - 1] != num) {
      return middleIdx;
    }
  }
  return -1;
}

function findIdxForLast(arr, num) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal > num) {
      rightIdx = middleIdx - 1;
    } else if (middleVal < num) {
      leftIdx = middleIdx + 1;
    } else if (middleVal === num && arr[middleIdx + 1] === num) {
      leftIdx = middleIdx + 1;
    } else if (middleVal === num && arr[middleIdx + 1] != num) {
      return middleIdx;
    }
  }
  return -1;
}
