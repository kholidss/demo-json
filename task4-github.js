const fs = require("fs");

let rawdata = fs.readFileSync("task4-github-json.json");
let data = JSON.parse(rawdata);

// No 1
function showNullPhone() {
  let no1 = data.filter((a) => a.profile.phones.length == 0);
  console.log({ no1 });
}
// showNullPhone();

// No 2
function showArticles() {
  let no2 = data.filter((a) => a.articles.length !== 0);
  console.log({ no2 });
}
// showArticles();

// No 3
function showName() {
  let no3 = data.filter((a) => a.profile.full_name.match(/anni/i));
  console.log({ no3 });
}
// showName();

// No 4
function showYearArticles() {
  let no4 = data.filter((a) => {
    let date = a.articles.filter((b) => b.published_at.match(/2020/));
    return date.length != 0;
  });
  console.log({ no4 });
}
// showYearArticles();

// No 5
function showYearBorn() {
  let no5 = data.filter((a) => a.profile.birthday.match(/1986/));
  console.log(no5);
}
// showYearBorn();

// No 6
function showContainArticles() {
  let no6 = data
    .map((a) => a.articles)
    .flat()
    .filter((b) => b.title.match(/tips/i));
  console.log(no6);
}
// showContainArticles();

// No 7
function showDate(inputDate) {
  let no7 = data
    .map((a) => a.articles)
    .flat()
    .filter((b) => {
      return new Date(b.published_at) < new Date(inputDate);
    });
  console.log(no7);
}
// showDate("2019-08");
