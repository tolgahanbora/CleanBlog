
import Blogs from "../Model/Blogs.js";

const getBlogCreate = (req,res) =>{
    Blogs.create(req.body) //post ile yakaladığım datayı, mongodb de fields oluşturttum.
    res.redirect("/")
}

const getfindBlog =  async (req,res) => {
    const blog = await Blogs.findById(req.params.id)
    res.render("blog", {
        blog
    })
}

const getEditPost = async (req,res) => {
    const blog = await Blogs.findOne({_id: req.params.id})
    blog.title = req.body.title,
    blog.detail = req.body.detail
    blog.save()
    res.redirect(`/blogs/${req.params.id}`)
}

const getDeletePost = async (req,res) =>  {
    await Blogs.findByIdAndRemove({_id: req.params.id})
    res.redirect('/')
}

export {
    getfindBlog,
    getBlogCreate,
    getEditPost,
    getDeletePost
}