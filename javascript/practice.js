// // Practical :  Longest repeating character. Input:   “etrrrtutraaaaa”, Output : "aaaaa"

// let input ="etrrrtutraaaaa"
// let freqMap = {}

// for(let i=0;i<input.length;i++){
//     if(freqMap[input[i]]){
//         freqMap[input[i]]++
//     }else{
//         freqMap[input[i]]=1
//     }
// }

// let result = Object.entries(freqMap)

// result.sort((a,b)=>b[1]-a[1])

// console.log(result[0][0].repeat(result[0][1]))


//second largest word

// let str = "i am the best"

// let copy = str.split(" ")

// let result = copy.reduce((acc,cur)=>{
//     if(cur.length > acc.firstLargest.length){
//         acc.secondLargest = acc.firstLargest
//         acc.firstLargest = cur

//     }
//     else if(cur.length > acc.secondLargest.length){
//         acc.secondLargest = cur
//     }
//     return acc
// },
// {
//     firstLargest : "",
//     secondLargest : ""
// },
// )

// console.log(result)