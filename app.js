const express = require("express");

const app = express();

let date = null;
app.get("/date", (request, response) => {
  date = new Date();
  response.send(`Today's date is ${date}`);
  console.log(date);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
