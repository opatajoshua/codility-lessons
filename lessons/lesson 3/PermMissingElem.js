// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const n = A.length+1
    return (n*(n+1)/2) - A.reduce((a, b) => a + b, 0)
}

console.log(solution([2, 3, 4, 1, 5,7]));