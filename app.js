import  express  from "express";
import mongoose from "mongoose";
import Blogs from "./Model/Blogs.js";


const app = express()
const port = 3000


//MONGODB CONNECT
mongoose.connect('mongodb://127.0.0.1:27017/clean-blog-db')

//MIDDLEWARE FUNC

app.use(express.static("public"))
app.use(express.urlencoded({ extended:true })) //Bunlar olmazsa json dönüşmüyor ve çalışmıyor. Dikkat et.
app.use(express.json())

//TEMPLATE ENGINE 
app.set("view engine", "ejs") //View engine ya da Views yazarsan çalışmaz. V'nin küçük olması gerek.

app.get("/", async (req,res) => {
 //  res.sendFile(path.resolve(__dirname, "public/index.html"))
 const blogs = await Blogs.find() //Blogs adında bir değişken oluşturup, onu mongoose ile veri arama fonskiyonuna atadım.
 res.render('index', {
    blogs  //atadığım değişkeni obje haline getirdim. ve index.ejs de tanımlayacağım. 
 })  
})

app.get("/about", (req,res)=> {
    res.render("about")
})

app.get("/add", (req, res) => {
    res.render("add")
} )

app.post("/blogs",  (req,res) =>{
    Blogs.create(req.body) //post ile yakaladığım datayı, mongodb de fields oluşturttum.
    res.redirect("/")
})

app.listen(port, (err) => {
    console.log(`Server ${port}unda ayağa kalktı.`)
})
//Add.js kısmında formlarda name ile schema objelerini eşleştirmen lazım. aksi takdirde obje boş döner. MONGODB'ye boş obje eklenir.

//ilk başta = koyuyorsun sonda eşittir işaretine gerek yok.