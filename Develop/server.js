const express = require("express");
const path = require("path");
const fs = require("fs");

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

// GET request for reviews
app.get("/api/db", (req, res) => {
  // Send a message to the client
  res.status(200).json(`${req.method} request received to get reviews`);

  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port http://localhost:${PORT}!`)
);
