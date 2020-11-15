// initialize the index file
const express = require("express");
const app = express();
const PORT = 3000;

// import your route
const user = require("./routes/users.js");
const novel = require("./routes/novel.js");

app.use("/user", user);
app.use("/novel", novel);

app.listen(PORT,() => {
    console.log("Magic happen in http://localhost:3000");
});