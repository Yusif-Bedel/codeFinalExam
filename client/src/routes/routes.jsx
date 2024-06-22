import AdminRoot from "../pages/admin/AdminRoot";
import Products from "../pages/admin/Products/Products";
import About from "../pages/site/About/About";
import Basket from "../pages/site/Basket/Basket";
import Blog from "../pages/site/Blog/Blog";
import BlogDetail from "../pages/site/BlogDetail/BlogDetail";
import CardDetail from "../pages/site/CardDetail/CardDetail";
import Contact from "../pages/site/Contact/Contact";
import Home from "../pages/site/Home/Home";
import Login from "../pages/site/Login/Login";
import Product from "../pages/site/Product/Product";
import Register from "../pages/site/Register/Register";
import SiteRoot from "../pages/site/SiteRoot";
import Wishlist from "../pages/site/Wishlist/Wishlist";
import Error from "../pages/site/Error/Error";
import AddProducts from "../pages/admin/AddProducts/AddProducts";
import AddBlogs from "../pages/admin/AddBlogs/AddBlogs";
import Blogs from "../pages/admin/Blogs/Blogs";
const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cardDetail/:id",
        element: <CardDetail />,
      },
      {
        path: "blogDetail/:id",
        element: <BlogDetail />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Products />,
      },
      {
        path:"addProducts",
        element:<AddProducts/>
      },
      {
        path:"addBlogs",
        element:<AddBlogs/>
      },
      {
        path:"blogs",
        element:<Blogs/>
      }
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default ROUTES;
