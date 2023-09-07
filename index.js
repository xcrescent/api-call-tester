const express = require("express");
const app = express();
const port = process.env.port ?? 4000;
const cors = require("cors");

app.use(cors());

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.json({
    message: "Hello World",
  });
});

app.listen(port, () => {
  console.log("Server running on port" + port);
});
