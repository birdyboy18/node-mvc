var express = require('express');
    router = express.Router();

//add in controllers
var Pages = require('../controllers/pages');

router.get('/', Pages.home());

module.exports = router;
