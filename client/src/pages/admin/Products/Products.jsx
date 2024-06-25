import React, { useContext, useState } from 'react'
import MainContext from '../../../context/context'
import axios from 'axios'
import { Helmet } from 'react-helmet'

const Products = () => {
  const { products, setProducts } = useContext(MainContext)
  const [editingProduct, setEditingProduct] = useState(null)
  const [newData, setNewData] = useState({
    title: '',
    price: '',
    brand: ''
  })

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8080/api/products/${id}`).then(res => {
      setProducts(products.filter(x => x._id !== id))
    })
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setNewData({
      title: product.title,
      price: product.price,
      brand: product.brand
    })
  }

  const handleSave = (id) => {
    axios.patch(`http://localhost:8080/api/products/${id}`, newData).then(res => {
      setProducts(products.map(product => product._id === id ? res.data.data : product))
      setEditingProduct(null)
      setNewData({
        title: '',
        price: '',
        brand: ''
      })
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewData({
      ...newData,
      [name]: value
    })
  }

  return (
    <>
    <Helmet>
            <title>Products</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
      <table style={{ marginTop: "130px" }} className="styled-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index} className="active-row">
              <td><img width={"70px"} src={item.images[0]} alt="" /></td>
              <td>
                {editingProduct && editingProduct._id === item._id ? (
                  <input
                    type="text"
                    name="title"
                    value={newData.title}
                    onChange={handleChange}
                  />
                ) : (
                  item.title
                )}
              </td>
              <td>
                {editingProduct && editingProduct._id === item._id ? (
                  <input
                    type="number"
                    name="price"
                    value={newData.price}
                    onChange={handleChange}
                  />
                ) : (
                  `$${item.price}`
                )}
              </td>
              <td>
                {editingProduct && editingProduct._id === item._id ? (
                  <input
                    type="text"
                    name="brand"
                    value={newData.brand}
                    onChange={handleChange}
                  />
                ) : (
                  item.brand
                )}
              </td>
              <td>
                {editingProduct && editingProduct._id === item._id ? (
                  <button className='btn btn-success' onClick={() => handleSave(item._id)}>Save</button>
                ) : (
                  <button className='btn btn-primary' onClick={() => handleEdit(item)}>Edit</button>
                )}
              </td>
              <td>
                <button className='btn btn-warning' onClick={() => deleteProduct(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Products
