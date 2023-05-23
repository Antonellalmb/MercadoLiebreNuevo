const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
//const publicFolderPath = path.resolve(__dirname, "./public");

//app.use(express.static(publicFolderPath));
app.listen(3000, () => {
  console.log("servidor corriendo en puerto 3000")
});

//app.get("/", (req, res) => {
 //   res.send("funcionando")
//});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
});

app.get("/register.html", (req, res) => {
  res.sendFile(path.join(__dirname,"/views/register.html"))
})

app.get("/login.html", (req, res) => {
  res.sendFile(path.join(__dirname,"/views/login.html"))
});






