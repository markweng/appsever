var express = require('express');
var router = express.Router();
/* Post users listing. */
router.post('/', function (req, res) {
    // res.end(JSON.stringify({ url: 'https://www.baidu.com/', launch: "launch" }))
    res.end(JSON.stringify({version:'1.0.0',language:'en'}))

});
router.get('/', function (req, res) {
    // res.end(JSON.stringify({ url: 'https://www.baidu.com/', launch: "launch" }))
});
module.exports = router;