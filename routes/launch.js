var express = require('express');
var router = express.Router();
/* Post users listing. */
router.post('/', function (req, res) {
    res.end(JSON.stringify({ url: 'https://www.baidu.com/', launch: "launch" }))

});
router.get('/', function (req, res) {
    res.end(JSON.stringify({ url: 'https://www.baidu.com/', launch: "launch" }))
});
module.exports = router;