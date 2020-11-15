const express = require("express");
const router = express.Router();

// Make your logic here
router.get("/", (req, res) => {
    res.send("ini halaman novel");
});

module.exports = router;