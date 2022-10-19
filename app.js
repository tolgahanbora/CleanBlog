import  Express  from "express";
import path from "path";

const app = Express()
const port = 3000
app.use(Express.static("public"))
app.set("View engine", "ejs")


app.get("/", (req,res) => {
 //  res.sendFile(path.resolve(__dirname, "public/index.html"))
 res.render('index')
})


app.listen(port)