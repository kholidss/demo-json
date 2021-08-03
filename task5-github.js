const fs = require("fs");

let rawdata = fs.readFileSync("task5-github-json.json");
let data = JSON.parse(rawdata);

// No 1
function no1() {
  let varNo1 = data.filter((a) => a.created_at.match(/02/));
}
// no1();

// No 2
function no2(cusName) {
  let varNo2 = data
    .filter((a) => a.customer.name === cusName)
    .map(
      (b) =>
        (b.grandtotal = b.items
          .map((c) => c.qty * c.price)
          .reduce((a, b) => a + b))
    )
    .reduce((a, b) => a + b);
  console.log(varNo2);
}
no2("Ari");

// No 3
let no3 = (price) => {
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
};
// no3(300000);
