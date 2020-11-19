const express = require("express");
const { route } = require("./novel");
const router = express.Router();

router.get("/", (req, res) => {
    // res.send("ini halama user");
    res.json({
        message : "ini halaman user"
    });
});

router.post("/", (req, res) => {
    res.json({
        message : req.body
    });
});


module.exports = router;