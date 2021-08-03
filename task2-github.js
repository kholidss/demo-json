const axios = require("axios").default;

async function getData(url) {
  return (await axios.get(url)).data;
}

let urlUsers = "https://jsonplaceholder.typicode.com/users";
let urlPosts = "https://jsonplaceholder.typicode.com/posts";

async function mergeData() {
  const users = await getData(urlUsers);
  const posts = await getData(urlPosts);

  // No1
  // cara 1
  const usersPosts = posts.map((v) => {
    v.user = users.find((u) => u.id === v.userId);
    return v;
  });
  console.log(usersPosts);

  // cara 2
  posts.forEach((post) => {
    post.user = users.find((user) => user.id === post.userId);
  });
  console.log(posts);

  // cara 3
  const postUser = [];
  for (let i = 0; i < posts.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (posts[i].userId === users[j].id) {
        const { ...data } = posts[i];
        data.user = users[j];
        postUser.push(data);
      }
    }
  }
  console.log(postUser);
}

mergeData();
