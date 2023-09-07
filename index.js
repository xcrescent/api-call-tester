const express = require("express");
const app = express();
const port = process.env.port ?? 4000;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Hello World",
  });
});

app.listen(port, () => {
  console.log("Server running on port" + port);
});
