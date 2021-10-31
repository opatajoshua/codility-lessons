// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A=[]) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b)=>a-b)
    if(A[A.length-1]!=A.length)
        return 0;
    for (let i = 0; i < A.length-1; i++) {
        if(A[i]+1!=A[i+1])
            return 0;
    }
    return 1;
}

//return A.reduce((p, c)=>p+c,0)==(A.length/2)*(2 + (A.length - 1)) ? 1: 0

console.log(solution([1]));
// console.log(solution([1,2,3,5]));