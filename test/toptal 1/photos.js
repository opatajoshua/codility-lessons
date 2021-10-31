// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S=[]) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrCopy  = [...S]
    let namesCountMap = {}
    let indexMap = S.reduce((prev,name, index)=>{
        const nameOnly = name.split('.')[0]
        if(namesCountMap[nameOnly])
            namesCountMap[nameOnly]+=1;
        else
            namesCountMap[nameOnly]=1;
        prev[name]={
            name,
            index,
        }
        return prev
    }, {});
    console.log();
    let nameMaps ={}
    S.sort((a, b)=>{
        return new Date(a.split(', ')[2]) - new Date(b.split(', ')[2])
    })
    for (let i = 0; i < S.length; i++) {
        const [file_and_ext, location /*, date_and_time*/] = S[i].split(', ');
        const [file, ext] = file_and_ext.split('.')
        if(nameMaps[file])
            nameMaps[file]++;
        else
            nameMaps[file]=1
        const newFilename = `${location}${String(nameMaps[file]).padStart(namesCountMap[file].length, '0')}.${ext}`
        indexMap[S[i]].newName = newFilename;
    }
    return arrCopy.map(a=>indexMap[a].newName);
}

console.log(solution(['photo.jpg, Warsaw, 2013-09-05 14:08:15',
'john.png, London, 2015-06-20 15:13:22',
'myFriends.png, Warsaw, 2013-09-05 14:07:13',
'Eiffel.jpg, Paris, 2015-07-23 08:03:02',
'pisatower.jpg, Paris, 2015-07-22 23:59:59',
'BOB.jpg, London, 2015-08-05 00:02:03',
'notredame.png, Paris, 2015-09-01 12:00:00',
'me.jpg, Warsaw, 2013-09-06 15:40:22',
'a.png, Warsaw, 2016-02-13 13:33:50',
'b.jpg, Warsaw, 2016-01-02 15:12:22',
'c.jpg, Warsaw, 2016-01-02 14:34:30',
'd.jpg, Warsaw, 2016-01-02 15:15:01',
'e.png, Warsaw, 2016-01-02 09:49:09',
'f.png, Warsaw, 2016-01-02 10:55:32',
'g.jpg, Warsaw, 2016-02-29 22:13:11']))