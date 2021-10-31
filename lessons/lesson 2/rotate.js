function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    while (K>0){
        let tempQueue = [];
        for(let i=0; i< A.length; i++){
            if(i==0)
                tempQueue.push(A[A.length-1])
            else
                tempQueue.push(A[i-1])
        }
        A = [...tempQueue];
        K--
    }
    return A;
}

console.log(solution([3, 8, 9, 7, 6], 3));