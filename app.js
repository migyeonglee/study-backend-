const express = require("express");
const app = express();
//서버 접속 포트
const port = 3000;
// 주소 ip:3000/
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
// 서버를 열겠다 / 동작할때 무언가
app.listen(port, () => {
    console.log("server open : ", port);
});