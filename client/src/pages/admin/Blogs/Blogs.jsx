// import React, { useContext } from 'react'
// import MainContext from '../../../context/context'
// import axios from 'axios'
// import { Helmet } from 'react-helmet'

// const Blogs = () => {
//   const { blogs, setBlogs } = useContext(MainContext)

//   const deleteBlog = (id) => {
//     axios.delete(`http://localhost:8080/api/products/${id}`).then(res => {
//       setBlogs([...blogs.filter((x) => x._id !== id)])
//     })
//   }

//   return (
//     <>
//         <Helmet>
//             <title>Blogs</title>
//             <meta name="description" content="Helmet application" />
//           </Helmet>
//       <table style={{ marginTop: "130px" }} className="styled-table">
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Category</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             blogs.map((item, index) => (
//               <tr key={index} className="active-row">
//                 <td><img width={"70px"} src={item.src || item.image} alt="" /></td>
//                 <td>{item.title}</td>
//                 <td>{item.description.slice(0, 30) + '...'}</td>
//                 <td>{item.category}</td>
//                 <td>
//                   <button className='btn btn-warning' onClick={() => deleteBlog(item._id)}>Delete</button>
//                 </td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>
//     </>
//   )
// }

// export default Blogs

import React, { useContext } from 'react';
import MainContext from '../../../context/context';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Blogs = () => {
  const { blogs, setBlogs } = useContext(MainContext);

  const deleteBlog = (id) => {
    axios.delete(`http://localhost:8080/api/blogs/${id}`)
      .then(res => {
        setBlogs(blogs.filter(x => x._id !== id));
      })
      .catch(error => {
        console.error('Error deleting blog:', error);
        // Optionally, notify the user of the error
      });
  }

  return (
    <>
      <Helmet>
        <title>Blogs</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {blogs.length === 0 ? (
        <p>Loading...</p>
      ) : (
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
            {blogs.map((item, index) => (
              <tr key={index} className="active-row">
                <td><img width={"70px"} src={item.src || item.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkehfBueDEsqfRjl9FDJo-SF0NMEaWiGovw&shttps://nealschaffer.com/wp-content/uploads/melanie-deziel-g1CDLIh3Cx4-unsplash.jpg"} alt={item.title} /></td>
                <td>{item.title}</td>
                <td>{item.description.slice(0, 30) + '...'}</td>
                <td>{item.category}</td>
                <td>
                  <button className='btn btn-warning' onClick={() => deleteBlog(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Blogs;
