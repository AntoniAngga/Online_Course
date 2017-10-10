var express = require('express');
var router = express.Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require('../models');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('index.ejs', { title: "Express"});
});

router.get('/coba', function(req,res,next) { 
    let user = db.User.findAll({
        where: {
            email: {
                [Op.eq]: "antoniangga14@gmail.com"
            }
        }
    })
    .then(data => {
        console.log("Query sudah bisa");
        console.log(data);
    })
    .catch(err => {
        res.send(err);
    })
});

module.exports = router;
