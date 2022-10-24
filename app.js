import  express  from "express";
import mongoose from "mongoose";
import  {getfindBlog,getBlogCreate, getEditPost,getDeletePost} from '../CleanBlog/Controller/PostController.js'
import {getHomePage,getAddPage,getAboutPage,getEditPage} from '../CleanBlog/Controller/PageController.js'
import methodOverride from "method-override";


const app = express()
const port = 3000


//MONGODB CONNECT
mongoose.connect('mongodb://127.0.0.1:27017/clean-blog-db')

//MIDDLEWARE FUNC

app.use(express.static("public"))
app.use(express.urlencoded({ extended:true })) //Bunlar olmazsa json dönüşmüyor ve çalışmıyor. Dikkat et.
app.use(express.json())
app.use(methodOverride('_method', {
    methods: ["POST", "GET"]
}))
//TEMPLATE ENGINE 
app.set("view engine", "ejs") //View engine ya da Views yazarsan çalışmaz. V'nin küçük olması gerek.

app.get("/", getHomePage )

app.get("/blogs/:id", getfindBlog)


app.get("/about", getAboutPage)

app.get("/add",getAddPage )
app.get("/blogs/edit/:id", getEditPage)
app.put("/blogs/:id",getEditPost )
app.delete("/blogs/:id", getDeletePost)
app.post("/blogs",getBlogCreate)

app.listen(port, (err) => {
    console.log(`Server ${port}unda ayağa kalktı.`)
})
//Add.js kısmında formlarda name ile schema objelerini eşleştirmen lazım. aksi takdirde obje boş döner. MONGODB'ye boş obje eklenir.

//ilk başta = koyuyorsun sonda eşittir işaretine gerek yok.