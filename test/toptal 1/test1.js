// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S="") {
    // write your code in JavaScript (Node.js 8.9.4)
    //a valid word must contain at least 1 char

    // return S.split(/[.?!]+/).map(sent=>sent.trim().replace(/  +/g, ' ').split(' ').length).sort((a,b)=>b-a)[0]
    const sentences = S.split(/[.?!]+/);
    let max=0;
    for(const sent of sentences){
        if(sent.length ){
            const words = sent.trim().replace(/  +/g, ' ').split(' ').length;
            console.log(sent,words);
            if(words>max)
                max = words
        }//sort((a,b)=>b.length-a.length)
    }

    return max;
} thier


console.log(solution('Forget  CVs..Save time . x x'));