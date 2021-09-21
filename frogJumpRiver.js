// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let jumps= 0;
    let tempMap ={};
    for(let i=0; i<A.length;i++){
        if(!tempMap[A[i]]){
            tempMap[A[i]]=true;
            jumps++;
            console.log(A[i], i);
        }
        if(jumps>=X)
            return i;
    }
    return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));