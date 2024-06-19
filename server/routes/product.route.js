const exoress=require("express");
const product_router=exoress.Router();
const controller=require("../controllers/index")

product_router.get("/api/products",controller.product.getAll)
product_router.get("/api/products/:id",controller.product.getOne)
product_router.delete("/api/products/:id",controller.product.delete)
product_router.patch("/api/products/:id",controller.product.update)
product_router.post("/api/products",controller.product.post)


module.exports=product_router