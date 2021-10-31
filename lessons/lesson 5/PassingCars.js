// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(A) {
    var zero = 0;
    var count = 0;
  
    for (var i = 0; i < A.length; i++) {
      if (A[i] == 0) zero++;
      else {
        count += 1 * zero;
        if (count > 1000000000) return -1;
      }
    }
  
    return count;
  }
  

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let zeroArr = []
    for(let i=0;i<A.length;i++){
        if(A[i]==0){
            zeroArr.push(0)
        }
        else if(zeroArr.length )
            zeroArr[zeroArr.length-1]++;

    }
    let zeroSumIndex =zeroArr.length-1;
    let zeroSum = 0;
    console.log(zeroArr);
    while(zeroSumIndex>=0){
        console.log('===', zeroSumIndex, zeroArr[zeroSumIndex],'+',zeroSum, '=', zeroArr[zeroSumIndex]+ zeroSum);
        if(zeroSumIndex<zeroArr.length-1)
            zeroArr[zeroSumIndex]+= zeroArr[zeroSumIndex+1]
        // else
        //     zeroArr[zeroSumIndex]= zeroSum
        // console.log('zeroSum',zeroSum,'+',zeroArr[zeroSumIndex] , '=', zeroSum+zeroArr[zeroSumIndex]);
        zeroSum+=zeroArr[zeroSumIndex]
        zeroSumIndex--;
    }
    return zeroSum;
}

console.log(solution([0, 1, 0, 1, 1]));
console.log('====================');
console.log(solution([0, 1, 0, 1, 0, 1]));