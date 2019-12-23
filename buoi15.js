var express = require('express');
var app = express();
var path = require('path');
var loginRouter = require('./router/loginRouter');
app.use(express.urlencoded())

app.post('api/v4/', loginRouter);

app.listen(3000, function() {
    console.log('listen on 3000');
})