const fs = require('fs');

let rawdata = fs.readFileSync('task1json.json');
let data = JSON.parse(rawdata);

// let no1 = []
// for (let i = 0; i < data.length; i++) {
//     if (data[i].placement.name == "Meeting Room"){
//         no1.push(data[i].name)
//     }
// }
// console.log({no1});

// let no2 = []
// for (let i = 0; i < data.length; i++) {
//     if (data[i].type == "electronic"){
//         no2.push(data[i])
//     }
// }
// console.log({no2});

// No2 use filter
let hasil = data.filter(smallData => smallData.type === "electronic")
console.log(hasil);

// let no3 = []
// for (let i = 0; i < data.length; i++) {
//     if (data[i].type == "furniture"){
//         no3.push(data[i])
//     }
// }
// console.log({no3});

// No3 use filter
// let hasilNo3 = data.filter(smallData => smallData.type === "furniture")
// console.log({hasilNo3});


// No4 use map
// let hasilNo4 = data.map(smallData => {
//     if (smallData.type === "furniture") {
//         return `${smallData.name}`}   
//     }  
// )
// console.log({hasilNo4});

// No3 & 4 use filter map chaining
let chain = data.filter(smallData => smallData.type === "furniture").map(smallData => smallData.name)
console.log({chain});

let no4 = []
for (let i = 0; i < data.length; i++) {
    let unix = data[i].purchased_at
    let convert = new Date(unix * 1000)
    let resConvert = convert.toString()

    if (resConvert.match(/^Thu/)){
        no4.push(data[i])
    }
}
console.log({no4});


// let no5 = []
// for (let i = 0; i < data.length; i++) {
//     for (let a = 0; a< data[i].tags.length; a++) {
//         if (data[i].tags[a] == "brown") {
//             no5.push(data[i])
//         }
//     }
// }
// console.log({no5});



// No3 & 4 use filter map chaining
// let chain = data.filter(smallData => smallData.type === "furniture").map(smallData => smallData.name)
// console.log({chain});

// no5 use non for
let no5 = data.filter((smallData) => smallData.tags.includes("brown")).map((smallData) => smallData.name);
console.log({no5});


