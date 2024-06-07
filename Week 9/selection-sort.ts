function swap(array, a, b) {
  const input = array[a];
  array[a] = array[b];
  array[b] = input;
}

function selectionSort(array: number[]) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[min_idx]) {
        min_idx = j;
      }
    }

    // Swap the found minimum element with the first element
    swap(array, min_idx, i);
  }

  return array;
}

console.log(selectionSort([2, 4, 5, 3]));
