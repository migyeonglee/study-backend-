const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use('/static', express.static('static'));
//서버 접속 포트
const port = 3000;
// 주소 ip:3000/
// app.get("/", (req, res) => {
//     // res.sendFile(__dirname + "/app.js");
//     //"test"== ejs 파일 이름
//     // res.render("test");
//     var person = [
//         { name: "이미경", gender: "woman" },
//         { name: "홍길동", gender: "man" }
//     ]
//     res.render("test", { per: person });
// });
app.get("/", (req, res) => {
    res.render("test");
});
app.get("/test0", (req, res) => {
    var coffee = [
        { menu: "에스프레소" },
        { menu: "아메리카노" },
        { menu: "카페라떼" },
        { menu: "카푸치노" },
        { menu: "모카라떼" },

    ]
    res.render("test0", { cfe: coffee });
});
app.get("/test1", (req, res) => {
    res.render("test1");
});
// 서버를 열겠다 / 동작할때 무언가
app.listen(port, () => {
    console.log("server open : ", port);
});