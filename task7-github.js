const axios = require("axios").default;
var fs = require("fs");

async function getData(url) {
  return (await axios.get(url)).data;
}

let url = "https://randomuser.me/api/?results=20";

// No 1
async function getFullName() {
  const dataApi = await getData(url);

  let show = dataApi.results.map((x) => {
    x.full_name = `${x.name.title} ${x.name.first} ${x.name.last}`;
    return x;
  });
  console.log(show);
}

// getFullName();

// No 2
async function getGender(gender) {
  const dataApi = await getData(url);

  let show = dataApi.results.map((x) => x).filter((a) => (a.gender = gender));
  console.log(show);
}

// getGender("male");

// No 3
async function convData() {
  const dataApi = await getData(url);

  let showFullName = dataApi.results.map((x) => {
    x.full_name = `${x.name.title} ${x.name.first} ${x.name.last}`;
    return x;
  });

  let mergeData = showFullName.map((a) => {
    return { full_name: a.full_name, email: a.email, phone: a.phone };
  });

  let toCSV = mergeData
    .map((x) => {
      return Object.values(x).toString();
    })
    .join("\n");

  fs.writeFile("taks7-github-csv.csv", toCSV, function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });

  //   (async () => {
  //     const csv = new ObjectsToCsv(mergeData);
  //     await csv.toDisk("./test.csv");
  //     console.log(await csv.toString());
  //   })();
}

convData();
