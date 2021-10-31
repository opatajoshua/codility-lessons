// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    var start = 0;
 
    var currentSum = A[0] + A[1];
    var minAvgSlice = currentSum / 2;
    for (var i=2; i<A.length; i++) {
       currentSum += A[i];
       var newAvg = currentSum / 3;
       if (newAvg < minAvgSlice) {
          minAvgSlice = newAvg;
          start = i-2;
       }
 
       currentSum -= A[i-2];
       newAvg = currentSum / 2;
       if (newAvg < minAvgSlice) {
          minAvgSlice = newAvg;
          start = i-1;
       }
    }
 
    return start;
 }

console.log(solution([4, 2, 2, 5, 1, 5, 8]));