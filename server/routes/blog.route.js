const exoress=require("express");
const blog_router=exoress.Router();
const controller=require("../controllers/index")
const blog_middleware=require("../middlewares/blog.post.midddleware")


blog_router.get("/api/blogs",controller.blog.getAll)
blog_router.get("/api/blogs/:id",controller.blog.getOne)
blog_router.delete("/api/blogs/:id",controller.blog.delete)
blog_router.patch("/api/blogs/:id",controller.blog.update)
blog_router.post("/api/blogs",controller.blog.post)


module.exports=blog_router