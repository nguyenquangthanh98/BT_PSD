// var http = require('http');

// //create a server object:
// http.createServer(function(req, res) { // req và res đặt tên tùy ý
//     res.write('<h1>Hello World!</h1>'); //write a response to the client
//     res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

var express = require('express')
var server = express()
var fs = require('fs')
var path = require('path');
var userRouter = require('./router/userRouter.js');

server.use(express.urlencoded())

// server.use('/', express.static(path.join(__dirname, './public')))

// server.use('/api/v4/user', userRouter);

// server.get('/download', function(req, res) {
//     res.download(path.join(__dirname, 'public/image/bg-banner.png'))
// })

var isLogin = false;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
server.use(allowCrossDomain)

server.post('/login', function(req, res, next) {
    if (req.body.user === "admin" && req.body.pass === "123456") {
        isLogin = true;
        console.log("dang nhap thanh cong roi");
        res.json(
            // "Chúc bạn đã đăng nhập thành công"
            // alert('dang nhap thành công')
            { status: 200, message: "dang nhap thanh cong roi" }
        )
    } else {
        isLogin = false
        console.log("dang nhap that bai roi", req.body);
        // next('Lỗi đăng nhập')
        // res.redirect('Lỗi')
        res.json({ status: 404, message: "Lỗi đăng nhập, xin vui lòng thử lại" })
    }
})


server.listen(process.env.PORT || 3000, function() {
    console.log('listen on 3000');
})






// server.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, './index.html'))
// })
// server.get("/services", (req, res) => {
//     res.sendFile(path.join(__dirname, './public/html/services.html'))
// })
// server.get("/features", (req, res) => {
//     res.sendFile(path.join(__dirname, './public/html/features.html'))
// })
// server.get("/portfolio", (req, res) => {
//     res.sendFile(path.join(__dirname, './public/html/portfolio.html'))
// })
// server.get("/contact", (req, res) => {
//     res.sendFile(path.join(__dirname, './public/html/contact.html'))
// })