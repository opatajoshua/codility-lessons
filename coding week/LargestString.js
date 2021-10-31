// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S="") {
    // write your code in JavaScript (Node.js 8.9.4)
    while(S.indexOf('abb')!=-1 ){
        S = S.replace(/abb/g,'baa')
    }
    return S;
}

console.log(solution('ababb'));