const BlogSchemaValidation=require("../validations/blog.validation")

const blog_middleware=(req,res,next) =>{
    const {error}=BlogSchemaValidation.validate(req.body)
    if (!error) {
        next()
    } else {
        const {details}=error
        res.send({
            message:details[0].message,
            error:true
        })
    }
}

module.exports=blog_middleware