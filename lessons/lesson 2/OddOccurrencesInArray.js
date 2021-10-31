function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = 0;
    for (let element of A) {
        result ^= element
    }
    
    return result
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b)=>a-b)
    for(let i=0;i<A.length; i++){
        if(A[i]!=A[i+1])
                return A[i];
        else
            i++;
           
    }
    return -1;
}


console.log(solution([9,9,4,6,4,5,6]));




 