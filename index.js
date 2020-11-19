// initialize the index file
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = 3000;

// import your route
const user = require("./routes/users.js");
const novel = require("./routes/novel.js");


//put your middleware here
app.use(bodyParser.json());
// app.use(express.json());


// root route
app.get("/" ,(req, res) => {
    res.json({
        message : "ini halaman root"
    });
});

// custom route
app.use("/user", user);
app.use("/novel", novel);

app.listen(PORT,() => {
    console.log("Magic happen in http://localhost:3000");
});