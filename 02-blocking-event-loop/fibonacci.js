// 0 1 1 2 3 5 8 ...
function fibonacci(n){
    return n === 1 || n === 0 ? n : fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(100))