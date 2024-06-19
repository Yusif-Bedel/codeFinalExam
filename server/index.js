
    
    const app = require("./config/dbConnect")

    const cors = require("cors");
    const bodyParser = require("body-parser");
    const router = require("./routes/index")
    
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(router.blog)
    
    app.use(router.product)
    app.use(router.user)
    app.use(router.tag)
