const exoress=require("express");
const user_router=exoress.Router();
const controller=require("../controllers/index")
const upload=require("../middlewares/user.register.middleware")

// authenticateToken can be add

user_router.get("/api/users",controller.user.getAll)
user_router.get("/api/users/:id",controller.user.getOne)
user_router.delete("/api/users/:id",controller.user.delete)
user_router.patch("/api/users/:id",controller.user.update)
user_router.post("/api/users",upload.single("src"),controller.user.register)
user_router.post("/api/login",controller.user. user_login)
user_router.get("/api/verify/:token",controller.user.verify)


module.exports=user_router