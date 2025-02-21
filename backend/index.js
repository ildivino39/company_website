const express = require("express");
const app = express();
const PORT = 3000;

//endpoint 설정
app.get("/", (req, res) => {
    res.send("hello world");
}) 

app.listen(PORT, () => {
    console.log("Server is running");
})