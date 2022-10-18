import  Express  from "express";

const app = Express()
const port = 3000

const blog = { id: 1, title: "Blog title", description: "Blog description" }
app.get("/", (req,res) => {
    res.send(blog)
})


app.listen(port)