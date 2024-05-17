const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

//Recursive function
const merge = (leftArr: number[], rightArr: number[]) => {
  let result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }

    return result
      .concat(leftArr.slice(leftIndex))
      .concat(rightArr.slice(rightIndex));
  }
};

const sampleArray = [3, 5, 1, 9, 10, 2, 6, 4];
console.log(mergeSort(sampleArray));
