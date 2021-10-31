// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A=[]) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b)=>a-b)
    const l = A.length;
    //last element after sorting could be negative which will produce a product lower product when multiplied with max
    return (  A[l-1]>0 ?
                Math.max(A[0]* A[1], A[l-3]* A[l-2]) :
                Math.min(A[0]* A[1], A[l-3]* A[l-2])
            ) * A[l-1]
}

console.log(solution([-5, -6, -4, -7, -10]));
console.log(solution([-3,1,2,-2,5,6]));
console.log(solution([-5, 5, -5, 4]));