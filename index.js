var express = require("express");

var app = express();

const Insta = require("scraper-instagram");
const InstaClient = new Insta();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", async function (req, res) {
  await InstaClient.authBySessionId("");
  const InstaData = await InstaClient.getProfile("fandy.next");

  console.log("sakfbhf", InstaData);

  await res.render("pages/index", {
    name: InstaData.name,
    followers: InstaData.followers,
    following: InstaData.following,
    posts: InstaData.posts,
  });
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(8080);
console.log("Server is listening on port 8080");
