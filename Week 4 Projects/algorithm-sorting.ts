// // // Bubble Sort
// // Sure, let's briefly discuss each sorting algorithm and then implement them in TypeScript.

// // Bubble Sort:
// // Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, 
// and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
// // Merge Sort:
// // Merge sort is a divide and conquer algorithm that divides the input array into two halves, sorts each half recursively, 
// and then merges the sorted halves.
// // Selection Sort:
// // Selection sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items 
// already sorted and the sublist of items remaining to be sorted. It repeatedly finds the minimum element from the unsorted sublist and moves it to the beginning of the sorted sublist.
// // Insertion Sort:
// // Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It iterates over the input 
// array, removing one element at a time and inserting it into the correct position in the sorted array.


function bubbleSort(arr: number[]): number[] {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}

// Merge Sort
function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Selection Sort
function selectionSort(arr: number[]): number[] {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
        }
    }
    return arr;
}

// Insertion Sort
function insertionSort(arr: number[]): number[] {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// Test the sorting algorithms
const arr = [5, 3, 8, 4, 2, 7, 1, 6];
console.log("Original Array:", arr);

console.log("Bubble Sort:", bubbleSort([...arr]));
console.log("Merge Sort:", mergeSort([...arr]));
console.log("Selection Sort:", selectionSort([...arr]));
console.log("Insertion Sort:", insertionSort([...arr]));
