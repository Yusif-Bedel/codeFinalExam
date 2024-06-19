import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ROUTES from './routes/routes'
import MainContext from './context/context'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    axios.get("http://localhost:8080/api/products").then(res=>{
      console.log(res.data.data)
      setProducts([...res.data.data])
      setLoading(false)
    })
  },[])
  
  const router=createBrowserRouter(ROUTES)
  const contextData={
    products,setProducts,loading,setLoading
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
