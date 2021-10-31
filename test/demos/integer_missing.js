function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b)=>a-b)
    if(A[0]>1)
        return 1;
    for(let i=0; i<A.length-1;i++){
        console.log( A[i], A[i+1], A[i+1] - A[i]);
        if(A[i+1] - A[i]>1 && A[i+1]>1){
            for(j=A[i]+1;j<A[i+1];j++)
                if(j>0)
                    return j;
        }

    }
    const res = A[A.length-1]+1
    console.log('got here',res);
    return res>1?res:1;
}

// console.log(solution([1, '-300000', 70000, 4, 1, -0002]));;
// console.log(solution([1, 3, 6, 4, 1, 2]));;
// console.log(solution([1, 2, 3]));;
// console.log(solution([-1, -3]));;
// console.log(solution([-1, -3, -10000000,10000000]));;
console.log(solution([2]));;