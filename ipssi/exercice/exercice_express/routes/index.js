var express = require('express');
var router = express.Router();

router.put("/", function(req , res) {
    // utiliser un sendFile
    // res.sendFile(__dirname  + path.sep + "index.html");
    res.render('index', { title: "COUCOU", message: 'bien ou bien?' });
});
router.delete("/", function(req, res) {
    // res.setHeader('Content-Type', 'text/plain');
    res.json({"bien" : "bien?"}).end();
});
router.use("/", function(req, res) {
    res.end('Coucou');
});

module.exports = router;
