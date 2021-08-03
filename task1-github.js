const fs = require("fs");

let rawdata = fs.readFileSync("task1-github-json.json");
let data = JSON.parse(rawdata);

// No 1

let no1 = data.filter((a) => a.created_at.match(/2018-02/));
console.log(no1);

// No 2
let no2 = (customerName) => {
  let customerFilter = data
    .filter((a) => a.customer.name === customerName)
    .map((b) => b.items.map((c) => c.price * c.qty).reduce((a, b) => a + b))
    .reduce((a, b) => a + b);
  let result = `Total price by ${customerName} is ${customerFilter}`;
  console.log(result);

  // with for loop:

  // let arrCountPrice = [];
  // let arrSubTotal = [];
  // for (let i = 0; i < data.length; i++) {
  //   let checkName = data[i].customer.name;
  //   if (checkName == customerName) {
  //     for (let a = 0; a < data[i].items.length; a++) {
  //       let processing = data[i].items[a];
  //       arrCountPrice.push(processing);
  //     }
  //   }
  // }
  // for (let b = 0; b < arrCountPrice.length; b++) {
  //   let subTotal = arrCountPrice[b].qty * arrCountPrice[b].price;
  //   arrSubTotal.push(subTotal);
  // }
  // let total = arrSubTotal.reduce((a, b) => a + b);
  // return console.log({ no2: `Total Price ${customerName}: ${total}` });
};

no2("Ari");

// No 3
let funcLowerThan = (price) => {
  let arrPrice = data
    .map((x) => {
      x.grandtotal = x.items
        .map((i) => i.price * i.qty)
        .reduce((a, b) => a + b);
      return x;
    })
    .filter((b) => {
      return b.grandtotal < 300000;
    })
    .map((c) => c.customer.name);

  let grandtotal = [...new Set(arrPrice)];
  console.log(grandtotal);
};

funcLowerThan(300000);
