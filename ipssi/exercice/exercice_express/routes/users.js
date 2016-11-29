var express = require('express');
var router = express.Router();

/* GET users listing. */

router.post("/", function(req, res) {
// app.post("/:resource(user)", function(req, res) {
    if (req.body.user) {
        user.save(function(err) {
            if (err) throw err;
            res.status(200).send("end");
            console.log('User saved successfully!');
        });
    }
});
router.put("/:id", (req, res) => {
    // console.log('je suis bien dans le put');
    req.models.user.findById(req.params.id, function(err, user) {
        if (err) 
            res.status(500).end();
        // console.warn(user);
        if (req.body.user) {
            Object.keys(req.body.user).forEach((key) => {
                // console.log(key, user[key], req.body.user[key]);
                user[key] = req.body.user[key];
            });
        }
            // change the users location
            // save the user
        // user.name = "Bob";
        // user.first_name = "Sponge";
        user.save(function(err) {
            if (err) throw err;
            req.method = 'GET';
            res.redirect(301, '/users');
            console.log('User successfully updated!');
        });
    }); 
});

router.get("/:id", function(req, res) {
    req.models.user.find({_id: req.params.id}, function(err, user) {
        if (err) {
            res.status(500).end();
            return;
        }
        res.render('users-get',{user: user[0]});
        res.end();
        // object of all the users
    });
}); 

router.use("/", function(req, res) {
    req.models.user.find({}, function(err, users) {
        if (err) {
            res.status(500).end();
            return;
        }
        res.render('users',{users: users});
        res.end();
        // object of all the users
    });
});
module.exports = router;
