const express = require("express");
const router = express.Router();

router.get("/",(req, res) => {
    res.send("ini halama user");
});


module.exports = router;