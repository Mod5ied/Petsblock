const express = require("express");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const inTime = 1000 * 60 * 60 * 24;

//username and password
const myusername = "user1";
const mypassword = "mypassword";

// a variable to save a session
var session;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  sessions({
    secret: "ABC0701EFG3620HIJK343",
    saveUninitialized: true, //best set to false for a parallel-request race condition
    cookie: { maxAge: inTime },
    resave: false,
  })
);
//serving public file
app.use(express.static(__dirname));
app.use(cookieParser());

//routes
app.get("/", (req, res) => {
  session = req.session;
  if (session.userid) res.send("Welcome user <a href='/logout'></a>");
  else res.sendFile("views/index.html", { root: __dirname });
});

app.post("/user", (req, res) => {
  if (req.body.username == myusername && req.body.password == mypassword) {
    session = req.session;
    session.userid = req.body.username;
    console.log(req.session);
    res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
  } else {
    res.send("Invalid username or password");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

PORT = 3005;
app.listen(PORT, () => {
  console.log("Running");
});
