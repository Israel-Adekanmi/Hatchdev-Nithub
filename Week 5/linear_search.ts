const scores = [88, 75, 40, 60, 90]
const sorted_scores = [40, 60, 75, 88, 90]
const target = 88

//Linear Search
function linearSearch (input: number[], target: number): number{
    for(let i = 0; i <= input.length; i++)   {
        const currentElement =input[i];
        if(currentElement == target){
            return i
        }
    }
    return -1
}


//binary search
type Result = {
    index: number
    numOfIteration: number
}


function binary_search(input: number[], target: number){
    let highIndex = input.length -1; // initial highest index
    let lowIndex = 0; // lowest index
    let midIndex;

    // const sorted_scores = [40, 60, 75, 88, 90]

    for (let i = 0; i <= input.length; i++){
        midIndex = Math.floor((highIndex + lowIndex) / 2)
        const middleElement = input[midIndex]

        if(middleElement == target){
            return {numOfIteration: i+1, index: midIndex};
        }
        else if (middleElement < target){
            lowIndex = midIndex + 1
        }
        else if(middleElement > target){
            highIndex = midIndex - 1
        }
    }
    return {numOfIteration: -1, index: -1}
}


const index = linearSearch(scores, target)
const result = binary_search(sorted_scores, target)
//console.log(index)
console.log("Linear Search =>", index)
console.log("Binary Search =>", result)