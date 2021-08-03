const axios = require("axios").default;

async function getData(url) {
  return (await axios.get(url)).data;
}

const urlApi =
  "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";

async function mergeData() {
  const products = await getData(urlApi);

  const usersPosts = products
    .map((v) => v)
    .filter((i) => i.category === "fruits");

  console.log(usersPosts);
}

mergeData();
