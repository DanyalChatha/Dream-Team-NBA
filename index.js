// IMPORT REQUIRED MODULES
const express = require("express");
const path = require("path");
const rapidapi = require("./modules/api");

// SET UP EXPRESS OBJECT AND PORT
const app = express();
const port = process.env.PORT || "8888";

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// CONNECT TO PUG
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// PAGE ROUTES
app.get("/", (request, response) => {
  response.render("index", { title: "Home" });
});

app.get("/game", (request, response) => {
  response.render("Game", { title: "Game" });
});

app.get("/Rules", async (request, response) => {
  response.render("rules", { title: "How to Play" });
});

app.get("/faq", async (request, response) => {
  response.render("FAQ", { title: "FAQ" });
});

app.get("/Player", async (request, response) => {
  let player = await rapidapi.getPlayer();
  response.render("player", { title: "Player", player});
});

// CONNECT TO PUBLIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

// SET UP SERVER LISTENING
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});