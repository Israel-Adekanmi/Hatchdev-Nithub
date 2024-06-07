function bubbleSort(arr, n){
    let i, j, current
    let swapped
    for(i = 0; i < n -1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) 
            {
                if (arr[j] > arr[j + 1]) 
                {
                    
                    current = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = current;
                    swapped = true;
                }
            }
    
            // IF no two elements were 
            // swapped by inner loop, then break
            if (swapped == false)
            break;
        } 

        return arr;
    }

const arr = [7,2,8,5]
const n = arr.length;

console.log(bubbleSort(arr, n));