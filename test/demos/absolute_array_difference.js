// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let leftSum = A[0];
    let rightSum=A.reduce( (pre,curr,)=>pre+curr,0 )-leftSum
    console.log('rightSum', rightSum);
    let min =rightSum;
    for(let i=1;i<A.length;i++){
            const diff = Math.abs(leftSum - rightSum);
            if(diff < min){
               min= diff
            }
            console.log(i,'diff', `${leftSum} - ${rightSum}`, diff);
            leftSum+=Math.abs(A[i]);
            rightSum-=Math.abs(A[i]);
    }
    return min;
}

console.log(solution([3, 1, 2, 4, 3]));