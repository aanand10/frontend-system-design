const express = require("express");
const app = express();
const cors = require("cors");

const allowedOrigin = ["http://127.0.0.1:5500/"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigin.indexOf(origin) !== 1 || !origin) {
      callback(null, ture);
    } else {
      callback(new Error("CORS error "));
    }
  },
};

app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.send("Hello World! from app.js");
});

app.get("/list", (req, res) => {
  res.send([{ id: 1, name: "Anand" }]);
});
const port = process.env.PORT || 5010;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
