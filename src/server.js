const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const path = require("path");
const static = require("serve-static");

const boardRouter = require("./router/boardRouter.js");
app.use("/board", boardRouter);

app.use("/public", express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/html/index.html"));
});

app.get("*", (req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(3000, () => {
    console.log("server is running at 3000");
});
