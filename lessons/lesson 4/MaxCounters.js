// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A=[]) {
    // write your code in JavaScript (Node.js 8.9.4)
    // let currArr =Array.from(new Array(N)).map(el=>0);
    // let prevMaxCounter = -1;
    // for (let k = 0; k < A.length; k++) {
    //     let currMaxCounter =-1;
    //     currArr = currArr.map((counter, xi)=>{
    //         const x =xi+1;
    //         if(prevMaxCounter>-1)
    //             counter=prevMaxCounter;

    //         if(A[k]==x && x>=1 && x<=N){
    //             counter++
    //         }
    //         if(A[k]==N+1 && counter>currMaxCounter){
    //             currMaxCounter=counter;
    //         }
    //         // console.log('counter', counter);
    //         return counter;
    //     })
    //     // for(let x =1; x<=N; x++){
    //     //     if(prevMaxCounter>-1)
    //     //         currArr[x-1]=prevMaxCounter;

    //     //     if(A[k]==x && x>=1 && x<=N){
    //     //         currArr[x-1]++
    //     //     }
    //     //     if(A[k]==N+1 && currArr[x-1]>currMaxCounter){
    //     //         currMaxCounter=currArr[x-1];
    //     //     }
    //     // }
    //     prevMaxCounter = currMaxCounter;
    // }
    // if(prevMaxCounter>-1)
    //     currArr = currArr.map(counter=>prevMaxCounter)
    // return currArr;// initialize all counters to 0

    let counters = Array(N).fill(0)

    // The maximum value of the counter is 0
    let max = 0

    // This variable will determine if an increment all operation has been encountered
    // and its value determines the maximum increment all operation encountered so far
    // for start it is 0, and we will set it to the value of max when A[i] == N + 1
    let max_all = 0

    for(let i = 0; i < A.length; i++) {

        if(A[i] <= N) {

            // if the value of A[i] is 1, we have to increment c[0]
            // and hence the following index
            const c_index = A[i] - 1

            // if max all operation was found previously,
            // we have to set it here, because we are not setting anything in the else section
            // we are just setting a flag in the else section
            // if its value however is greater than max_all, it probably was already maxed
            // and later incremented, therefore we will skip it
            if(counters[c_index] < max_all) counters[c_index] = max_all
            
            // do the increment here
            const v = ++counters[c_index]

            // update the max if the current value is max
            max = v > max ? v : max

        }

        // this is straight forward
        else max_all = max
        
        console.log(A[i], counters);
    }
    
    // if there are remaining items that have not been set to max_all inside the loop
    // we will update them here.
    // and we are updating them here instead of inside the for loop in the else section
    // to make the running time better. If updated inside the loop, we will have a running time of M * N
    // however here it's something like (M + N) ~ O(N)
    if(max_all) counters = counters.map(v => v < max_all ? max_all : v)

    // return the counters
    return counters

}

console.log(solution(5, [3,4]));
// console.log(solution(5, [3,4,4,6,1,4,4]));
// console.log(solution([1,2,3,5]));