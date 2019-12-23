var express = require('express')
var app = express()
var fs = require('fs');
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded())

app.get('/', function(req, res, next) {
    res.sendfile(path.join(__dirname, './public/html/services.html'))
})


app.get('/login', function(req, res) {
    res.sendfile(path.join(__dirname, 'public/html/dangnhap.html'))
})


app.get('/google.com', function(req, res, next) {
    res.redirect('https://www.google.com')
})


app.get('/google-maps', function(req, res, next) {
    res.redirect('https://www.google.com/maps') // chuyen đường dẫn sang google maps
})


// app.post('/login', function(req, res, next) {
//     if (req.body.username === "admin" && req.body.password === "123456") {
//         isLogin = true;
//         res.json(
//             "Chúc bạn đã đăng nhập thành công"
//             // alert('dang nhap thành công')
//         )
//     } else {
//         isLogin = false
//         next('Lỗi đăng nhập')
//             // res.redirect('Lỗi')
//     }
// })

// app.get('/private', function(req, res, next) {
//     if (isLogin) {
//         // next()
//         res.json('Đăng nhập private thành công')
//     } else {
//         next("quay lại đăng nhập")
//     }
// })

// app.use(function(err, req, res, next) {
//     // console.log(err);
//     res.json(err)
// })

app.get('/sum/:a/:b', function(req, res) {
        var sum = parseInt(req.params.a) + parseInt(req.params.b)
        res.send('Sum 2 so vua truyen la:' + sum)
    })
    //download
app.get('/download', function(req, res) {
    res.download(path.join(__dirname, 'public/image/bg-banner.png'))
})


app.post('/post', function(req, res) {
    res.json({
        user: req.body.user,
        pass: req.body.pass
    })
})

app.listen(3000, function() {
    console.log('listen on 3000');
})