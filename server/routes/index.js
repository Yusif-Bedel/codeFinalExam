const user_router=require("./user.route")
const blog_router=require("./blog.route")

const tag_router=require("./tag.route")
const product_router=require("./product.route")



const router={
    user:user_router,
    blog:blog_router,

    tag:tag_router,
    product:product_router,


}


module.exports=router