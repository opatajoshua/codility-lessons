// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A=[], D=[]) {
    // write your code in JavaScript (Node.js 8.9.4)
    let monthMap = {};
    let totalInc =0
    for(let i = 0; i<A.length; i++){
        totalInc+=A[i]
        if(A[i]<0){
            const month = D[i].split('-')[1];
            if(!monthMap[month])
                monthMap[month]={
                    count: 1,
                    total: Math.abs(A[i])
                }
            else
                monthMap[month]={
                    count: monthMap[month].count+1,
                    total: monthMap[month].total+Math.abs(A[i])
                }
        }
    }
    let feeExcepts = 0;
    for (const month in monthMap) {
        if(monthMap[month].count>=3 && monthMap[month].total>=100)
            feeExcepts++
    }
    return totalInc - (5 * (12-feeExcepts))
}
