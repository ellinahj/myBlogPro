const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send({ express: "Express" });
});

app.post("/api/world", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body, "body");
  res.send(`post: ${req.body.post}`);
});

app.listen(port, () => console.log(`Server on port ${port}`));
