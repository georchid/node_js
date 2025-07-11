// 0 1 1 2 3 5 8 ...
setTimeout(() => console.log("Timeout"), 0)

function fibonacci(n) {
    return new Promise((resolve, _) => {
        if (n === 0 || n === 1){
            return resolve(n)
        }
        Promise.all([fibonacci(n-1), fibonacci(n-2)])
            .then(([fib1, fib2]) => resolve(fib1 + fib2))
    })
}


// Heap out of memory
fibonacci(10).then((res) => console.log(res));
