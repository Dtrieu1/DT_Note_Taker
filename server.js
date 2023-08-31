const express = require("express");
const path = require("path");
const fs = require("fs");
const reviews = require("./db/db.json");

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.post("/api/notes", (req, res) => {
  console.info(`${req.method} request received to add a review`);
  console.info(req.body);
  const { title, text } = req.body;

  fs.writeFile("./db/db.json", JSON.stringify(req.body), (err) => {
    if (err) console.log(err);
  });
});

// app.listen(PORT, () =>
//   console.log(`Express server listening on port http://localhost:${PORT}!`)
// );

app.listen(process.env.PORT || 3001);
