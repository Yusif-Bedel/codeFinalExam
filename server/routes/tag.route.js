const exoress=require("express");
const tag_router=exoress.Router();
const controller=require("../controllers/index")

tag_router.get("/api/tags",controller.tag.getAll)
tag_router.get("/api/tags/:id",controller.tag.getOne)
tag_router.delete("/api/tags/:id",controller.tag.delete)
tag_router.patch("/api/tags/:id",controller.tag.update)
tag_router.post("/api/tags",controller.tag.post)


module.exports=tag_router