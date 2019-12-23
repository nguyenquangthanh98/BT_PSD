var Router = require('express').Router;
var router = Router();
var path = require('path');
var express = require('express');


var isLogin = false;
router.use(express.static(path.join(__dirname, '../public')))

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/html/dangnhap.html'))

})
router.post('api/v4/login', function(req, res, next) {
    if (req.body.username === "admin" && req.body.password === "123456") {
        isLogin = true;
        res.json(
            "Chúc bạn đã đăng nhập thành công"
            // alert('dang nhap thành công')
        )
    } else {
        isLogin = false
        next('Lỗi đăng nhập')
            // res.redirect('Lỗi')
    }
})

router.get('api/v4/private', function(req, res, next) {
    if (isLogin) {
        // next()
        res.json('Đăng nhập private thành công')
    } else {
        next("quay lại đăng nhập")
    }
})

router.use(function(err, req, res, next) {
    // console.log(err);
    res.json(err)
})


module.exports = router;