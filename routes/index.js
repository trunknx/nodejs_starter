/*
 * Copyright (c) 2019. All right reserved
 * Last modified: 3/27/19 11:03 PM
 * Author: TrungNguyen
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {title: 'Express'});
});

module.exports = router;
