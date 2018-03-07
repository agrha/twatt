var express = require('express');
var router = express.Router();
const Tweet = require('../controllers/tweet')

/* GET users listing. */
router.get('/',Tweet.viewTwit)
router.post('/',Tweet.searchTwit)
router.post('/post',Tweet.postTwit)

module.exports = router;
