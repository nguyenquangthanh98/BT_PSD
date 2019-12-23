var Router = require('express').Router;
var router = Router();
var path = require('path');
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})
router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/contact.html'))
})
router.get("/services", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/services.html'))
})
router.get("/portfolio", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/portfolio.html'))
})
router.get("/features", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/features.html'))
})
router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/dangnhap.html'))
})
console.log(__dirname);
module.exports = router;