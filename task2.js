const fs = require('fs');

let rawdata = fs.readFileSync('task2json.json');
let data = JSON.parse(rawdata);

// No3
let funcLowerThan = price => {
    let arrShow = [];
    
    for (let i = 0; i < data.length; i++) {
        for (let a = 0; a < data[i].items.length; a++) {
            console.log(data[i].items[a]);
            
        }
    }
   
    for (let a = 0; a < arrShow.length; a++) {
        // console.log(arrShow[a].items);
        for (let b = 0; b < arrShow[a].length; b++) {
            // console.log(arrShow[a].items);
            
        }
        
    }
    
}
funcLowerThan(300000)

// No1
// let no1 = [];

// for (let i = 0; i < data.length; i++) {
//   let purchase = data[i].created_at;

//   if (purchase.match(/^2018-02/)) {
//     no1.push(data[i]);
//   }
// }
// console.log({ no1 });

// // No 2
// let funcSumTotal = customerName => {
//   let arrCountPrice = [];
//   let arrSubTotal = [];

//   for (let i = 0; i < data.length; i++) {
//     let checkName = data[i].customer.name;
//     if (checkName == customerName) {
//       for (let a = 0; a < data[i].items.length; a++) {
//         let processing = data[i].items[a];
//         arrCountPrice.push(processing);
//       }
//     }
//   }

//   for (let b = 0; b < arrCountPrice.length; b++) {
//     let subTotal = arrCountPrice[b].qty * arrCountPrice[b].price;
//     arrSubTotal.push(subTotal);
//   }

//   let total = arrSubTotal.reduce((a, b) => a + b);
//   return console.log({ no2: `Total Price ${customerName}: ${total}` });
// };

// funcSumTotal("Ari");