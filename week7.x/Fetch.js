//axios vs fetch
//  https://sum-server.100xdevs.com/todos

// function Request() {
//   console.log("inside the function..");
//   fetch("https://sum-server.100xdevs.com/todos").then(async (response) => {
//     const json = await response.json();
//   });
// }

async function Request() {
  const response = await fetch("https://sum-server.100xdevs.com/todos");

  const json = await response.json();
  console.log(json.todos.length);
}

Request();
