const axios = require("axios");

async function axiosRequest() {
  const response = await axios.get(
    "https://sum-server.100xdevs.com/todos",
    {
      username: "Ankit",
    },
    {
      headers: {
        Authorization: "Bearer 123",
      },
    }
  );
  console.log(response.data.todos.length);
}
