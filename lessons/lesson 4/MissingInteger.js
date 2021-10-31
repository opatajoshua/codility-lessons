// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(A) {
    var min = 1;
    A.sort(function(a,b){
       // Sort the array explicit way
       return a - b; 
    });

    for (var i in A) {
        if (A[i] > -1 && A[i] == min) {
                min++;
        }
    }

    return min;
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = Array.from(new Set(A)).sort((a,b)=>a-b)
    if(arr[0]>1 || arr[arr.length-1]<1)
        return 1;
    for(let i = 0; i<arr.length;i++){
        if(arr[i]>0){
            if(arr[i]+1!=arr[i+1])
                return arr[i]+1;
        }
        else if(arr[i]<=0 && arr[i+1]>1)
            return 1;
    }
    return 1;
}



console.log(solution([-1000000, 1000000]));