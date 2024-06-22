import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import axios from 'axios'

const Blogs = () => {
  const { blogs, setBlogs } = useContext(MainContext)

  const deleteBlog = (id) => {
    axios.delete(`http://localhost:8080/api/products/${id}`).then(res => {
      setBlogs([...blogs.filter((x) => x._id !== id)])
    })
  }

  return (
    <>
      <table style={{ marginTop: "130px" }} className="styled-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            blogs.map((item, index) => (
              <tr key={index} className="active-row">
                <td><img width={"70px"} src={item.src} alt="" /></td>
                <td>{item.title}</td>
                <td>{item.description.slice(0, 30) + '...'}</td>
                <td>{item.category}</td>
                <td>
                  <button className='btn btn-warning' onClick={() => deleteBlog(item._id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Blogs
