// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

}

function selectionSort(arr) {
  for (let i = 0; i < arr.length, i++) {
    let indexOfMin = i;

    // Start comparing to find the indexOfMin
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    // swapping lesser with indexOfMin
    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // create new empty array, like concat
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort };
