/*
 * Copyright (c) 2019. All right reserved
 * Last modified: 3/27/19 11:03 PM
 * Author: TrungNguyen
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

module.exports = router;
