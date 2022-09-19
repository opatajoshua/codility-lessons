// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const matches = (N >>> 0).toString(2).match(/(?!1).+?(?=1)/g);
    if(!matches)
        return 0;
    return matches.sort((a,b)=>b.length-a.length)[0].length
}

/** 
 * a another genious answer i found
 * https://dev.to/jonrandy/comment/1p8pk
 * */ 
