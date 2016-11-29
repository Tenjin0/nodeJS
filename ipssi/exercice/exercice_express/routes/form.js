const  express = require('express');
const router = express.Router();

router.get("/", function(req, res) {
    res.render("form1");
})
router.get("/1", function(req , res) {
    // utiliser un sendFile
    // res.sendFile(__dirname  + path.sep + "index.html");
    res.render('form1');
});
router.get("/2", function(req, res) {
    // res.setHeader('Content-Type', 'text/plain');
    res.render('form2');
});

router.post("/showPost", function(req, res) {
    console.log(req.body);
    res.end();
});
router.get("/showGet", function(req, res) {
    console.log(req.query);
    res.end();
});
module.exports = router;
