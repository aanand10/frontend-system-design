const express = require("express");
const app = express();
let data = "Initial data ";
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/getData", (req, res) => {
  res.send({
    data,
  });
});

app.get("/updatedata", (req, res) => {
  data = "This is the updated dataaaaa...";
  res.send({
    data,
  });
});

const port = process.env.PORT || 2024;

app.listen(port, () => {
  console.log(
    `Server is running on port ${port} , Now you can use http://localhost:2024/`
  );
});
