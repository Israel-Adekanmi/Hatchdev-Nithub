//interface for  a Stack
interface Stack<T> {
    push(item: T): void;     
    pop(): T | undefined;     
    peek(): T | undefined;    
    size(): number;           
    clear(): void;   
}  


//factorial 
const factorial =(n:number): number => {
    if(n <= 0) return 1;
    return n * factorial(n-1)
}

console.log(factorial(5))

//write fibonacci algorithm

const fibonacci = (n: number): number =>{
    if(n < 1) return 0;

    if (n === 1 || n === 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(4))


//Valid parentheses
function isValid(s: string): boolean {
    let stack: string[] = [];
    const bracket = {
        "]": "[",
        "}": "{",
        ")": "(",
    };

    for (let c of s) {
        if (c in bracket) {
            const lastIndex = stack.length  - 1;
            if (stack[lastIndex] === bracket[c]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(c);
        }
    }

    return stack.length === 0;
}
