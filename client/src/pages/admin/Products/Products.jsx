import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import axios from 'axios'

const Products = () => {
  const {products,setProducts}=useContext(MainContext)
  const deleteProduct=(id)=>{
    axios.delete(`http://localhost:8080/api/products/${id}`).then(res=>{
      setProducts([...products.filter((x)=>x._id!=id)])
    })
  }
  return (
    <>
      <table style={{marginTop:"130px"}} class="styled-table">
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
              products.map((item,index)=>{
                return(<tr key={index} class="active-row">
                <td ><img width={"70px"} src={item.images[1]} alt="" /></td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>{item.brand}</td>
                <td><button className='btn btn-warning' onClick={()=>{
                  deleteProduct(item._id)
                }}>Delete</button></td>
            </tr>)
              })
            }

        </tbody>
    </table>
    </>
  )
}

export default Products
