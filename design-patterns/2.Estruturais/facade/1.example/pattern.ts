import axios from "axios";

function getUsers() {
  return GET("https://jsonplaceholder.typicode.com/users");
}

function getUserPosts(userId: number) {
  return GET("https://jsonplaceholder.typicode.com/posts", { userId });
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});

// Função GET limpa o código porque não é necessário copiar os headers em todos os locais (DRY)

// function GET(url: string, params = {}) {
//   const queryString = Object.entries(params)
//     .map((param) => {
//       return `${param[0]}=${param[1]}`;
//     })
//     .join("&");
//   return fetch(`${url}?${queryString}`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   }).then((res) => res.json());
// }

// Realizar a troca do fetch para o axios é tão simples quanto atualizar a função GET
function GET(url: string, params = {}) {
  return axios({
    url,
    method: "GET",
    params,
  }).then((res) => res.data);
}
