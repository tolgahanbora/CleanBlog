import mongoose from "mongoose";
import { Schema } from "mongoose";


const blogSchema = new Schema({

    title: String,
    detail: String,
    date: {type:Date,default: Date.now }

})
const Blogs = mongoose.model("Blogs", blogSchema)

export default Blogs