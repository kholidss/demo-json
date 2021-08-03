const fs = require("fs");

let rawdata = fs.readFileSync("task6-github-json.json");
let data = JSON.parse(rawdata);

// No 1
function no1(name) {
  let item = data.filter((v) => v.placement.name === name).map((v) => v.name);

  let toJson = JSON.stringify(item);
  let fs = require("fs");
  fs.writeFile("items.json", toJson, function (err, result) {
    if (err) console.log("error", err);
  });
}
no1("Meeting Room");

// No 2
function no2(type) {
  let device = data.filter((v) => v.type === type).map((v) => v.name);

  let toJson = JSON.stringify(device);
  let fs = require("fs");
  fs.writeFile("electronic.json", toJson, function (err, result) {
    if (err) console.log("error", err);
  });
}
// no2("electronic");

// No 3
function no3(type) {
  let furniture = data.filter((v) => v.type === type).map((v) => v.name);

  let toJson = JSON.stringify(furniture);
  let fs = require("fs");
  fs.writeFile("furnitures.json", toJson, function (err, result) {
    if (err) console.log("error", err);
  });
}
// no3("furniture");

// No 4
function no4(date) {
  date = new Date(date).toLocaleDateString();
  let purchasedDate = data
    .filter(
      (v) => new Date(v.purchased_at * 1000).toLocaleDateString() === date
    )
    .map((v) => v.name);

  let toJson = JSON.stringify(purchasedDate);
  let fs = require("fs");
  fs.writeFile("purchased-at-2020-01-16.json", toJson, function (err, result) {
    if (err) console.log("error", err);
  });
}
no4("2020-01-16");

// No 5
function no5(color) {
  const allItems = data
    .filter((v) => v.tags.includes(color))
    .map((v) => v.name);

  let toJson = JSON.stringify(allItems);
  let fs = require("fs");
  fs.writeFile("all-browns.json", toJson, function (err, result) {
    if (err) console.log("error", err);
  });
}
no5("brown");
