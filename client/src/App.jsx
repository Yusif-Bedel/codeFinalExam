import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ROUTES from './routes/routes'
import MainContext from './context/context'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './layout/admin/Header/Header'
import { number } from 'yup'

function App() {
  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(true)
  const [loginned,setLoginned]=useState(false)
  const [blogs,setBlogs]=useState([])
  const [subtotal,setSubtotal]=useState()
  useEffect(()=>{
    axios.get("http://localhost:8080/api/products").then(res=>{
      console.log(res.data.data)
      setProducts([...res.data.data])
      setLoading(false)
    })
  },[])
  useEffect(()=>{
    axios.get("http://localhost:8080/api/blogs").then(res=>{
      setBlogs([...res.data.data])
    })
  },[])
  
  const router=createBrowserRouter(ROUTES)
  const contextData={
    products,setProducts,loading,setLoading,loginned,setLoginned,blogs,setBlogs,subtotal,setSubtotal
  }
  return (
    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={router} />
      </MainContext.Provider>

    </>
  )
}

export default App
