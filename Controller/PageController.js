
import Blogs from "../Model/Blogs.js";

const getAboutPage = (req,res)=> {
    res.render("about")
}

const getAddPage = (req, res) => {
    res.render("add")
} 


const getHomePage = async (req,res) => {
    //  res.sendFile(path.resolve(__dirname, "public/index.html"))
    const blogs = await Blogs.find() //Blogs adında bir değişken oluşturup, onu mongoose ile veri arama fonskiyonuna atadım.
    res.render('index', {
       blogs  //atadığım değişkeni obje haline getirdim. ve index.ejs de tanımlayacağım. 
    })  
   }

   const getEditPage = async (req, res) => {
   const blog = await Blogs.findOne({_id: req.params.id})
   res.render("edit",{
    blog
   })
   }

   export {
    getHomePage,
    getAddPage,
    getAboutPage,
    getEditPage
   }