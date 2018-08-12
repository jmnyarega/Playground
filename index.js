var express = require('express');
var { hello, log } = require('./middlewares');
var app = express();
var port = 8000;

/** You can use pass middlewares inside app.use() function 
 * app.use(hello);
 * Or pass it inside the app.get/post/delete/patch/update etc methods
 */

app.get('/', hello, log, function(req, res) {
    res.statusCode = 303;
    res.json({
        name: 20,
    });
});

app.listen(port, function() {
    console.log(`Server running on ${port}`);
});
