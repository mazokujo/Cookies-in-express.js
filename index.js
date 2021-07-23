const express = require('express');
const app = express();
//import cookie parser
const cookieParser = require('cookie-parser')
app.use(cookieParser('signedCookie'));

app.get('/greet', (req, res) => {
    console.log(req.cookies)
    res.send("Hey There!!!!")
})

app.get('/name', (req, res) => {
    res.cookie('name', 'Abigail Marston')
    res.cookie('occupation', 'House wife')
    res.send('Name is Abigail Marston')
})

app.get('/signedCookie', (req, res) => {
    res.cookie('hardware', 'playstation2', { signed: true });
    res.send('Verify cookie signature')
})
app.get('/cookiesVerification', (req, res) => {
    console.log(req.signedCookies)
    console.log(req.cookies)
    res.send(req.signedCookies)
})


app.listen('3000', () => {
    console.log('Receiving from port 3000')
});