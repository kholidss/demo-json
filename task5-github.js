const fs = require("fs");

let rawdata = fs.readFileSync("task5-github-json.json");
let data = JSON.parse(rawdata);

// No 1
function no1() {
  let varNo1 = data.filter((a) => a.created_at.match(/02/));

  let toJson = JSON.stringify(varNo1);
  let fs = require("fs");
  fs.writeFile("task5-1-jsonfile.json", toJson, function (err, result) {
    if (err) console.log("error", err);
  });
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

  let toJson = JSON.stringify(varNo2);
  let fs = require("fs");
  fs.writeFile("task5-2-jsonfile.json", toJson, function (err, result) {
    if (err) console.log("error", err);
  });
}
// no2("Ari");

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

  let toJson = JSON.stringify(grandtotal);
  let fs = require("fs");
  fs.writeFile("task5-3-jsonfile.json", toJson, function (err, result) {
    if (err) console.log("error", err);
  });
};
// no3(300000);
