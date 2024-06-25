// import React, { useContext } from "react";
// import { Helmet } from "react-helmet";
// import { Formik } from "formik";
// import MainContext from "../../../context/context";
// import axios from "axios";
// const AddBlogs = () => {
//   const {blogs,setBlogs}=useContext(MainContext)
//   return (
//     <>
//       <div style={{paddingTop:"100px"}}>
//         <Helmet>
//           <title>Add Blogs</title>
//         </Helmet>
//         <Formik
//           initialValues={{
//             src: "",
//             title: "",  
//             description: "",
//             description1: "",
//             category: "",
//             author:"",
//             uploadTime:""
//           }}
//           onSubmit={(values, { resetForm }) => {
//             axios
//               .post("http://localhost:8080/api/blogs", {
//                 src: values.src,
//                 title: values.title,
//                 description: values.description,
//                 description1: values.description1,
//                 category: values.category,
//                 author: values.author,
//                 uploadTime:values.uploadTime
//               })
//               .then((res) => {
//                 setBlogs([...blogs, res.data.data]);
//                 resetForm();
//               })
//               .catch((error) => {
//                 console.error("There was an error adding the blog!", error);
//                 alert("There was an error adding the blog!")
//               });
//           }}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//           }) => (
//             <form
//               className="container text-light p-5 gap-3 d-flex flex-column w-50 mt-5 rounded-3 mb-5 bg-dark"
//               onSubmit={handleSubmit}
//             >
//               <label htmlFor="title" className="form-label">
//                 Blog Title
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Enter title"
//                 className="form-control"
//                 id="title"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.title}
//               />
//               {errors.title && touched.title && (
//                 <div className="text-danger">{errors.title}</div>
//               )}

//               <label htmlFor="description" className="form-label">
//                 Blog Description
//               </label>
//               <input
//                 type="text"
//                 name="description"
//                 placeholder="Enter description"
//                 className="form-control"
//                 id="description"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.description}
//               />
//               {errors.description && touched.description && (
//                 <div className="text-danger">{errors.description}</div>
//               )}

//               <label htmlFor="src" className="form-label">
//                 Blog Image
//               </label>
//               <input
//                 type="text"
//                 name="src"
//                 placeholder="Enter image url"
//                 className="form-control"
//                 id="src"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.src}
//               />
//               {errors.src && touched.src && (
//                 <div className="text-danger">{errors.src}</div>
//               )}

//               <label htmlFor="price" className="form-label">
//                 Blog Special Description
//               </label>
//               <input
//                 type="text"
//                 name="description1"
//                 id="price"
//                 placeholder="Enter special description"
//                 className="form-control"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.description1}
//               />
//               {errors.description1 && touched.description1 && (
//                 <div className="text-danger">{errors.description1}</div>
//               )}

//               <label htmlFor="category" className="form-label">
//                 Blog Category
//               </label>
//               <input
//                 type="text"
//                 name="category"
//                 id="category"
//                 placeholder="Enter Category"
//                 className="form-control"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.category}
//               />
//               {errors.category && touched.category && (
//                 <div className="text-danger">{errors.category}</div>
//               )}
//               <label htmlFor="author" className="form-label">
//                 Blog Author
//               </label>
//               <input
//                 type="text"
//                 name="author"
//                 id="author"
//                 placeholder="Enter Author's name"
//                 className="form-control"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.author}
//               />
//               {errors.author && touched.author && (
//                 <div className="text-danger">{errors.author}</div>
//               )}
//               <label htmlFor="upload" className="form-label">
//                 Blog Special Description
//               </label>
//               <input
//                 type="text"
//                 name="uploadTime"
//                 id="upload"
//                 placeholder="Enter Upload Time"
//                 className="form-control"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.uploadTime}
//               />
//               {errors.uploadTime && touched.uploadTime && (
//                 <div className="text-danger">{errors.uploadTime}</div>
//               )}

//               <button className="btn btn-primary mt-3" type="submit">
//                 ADD
//               </button>
//             </form>
//           )}
//         </Formik>
//       </div>
//     </>
//   );
// };

// export default AddBlogs;

import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Formik } from "formik";
import MainContext from "../../../context/context";
import axios from "axios";
import * as Yup from 'yup';

const AddBlogs = () => {
  const { blogs, setBlogs } = useContext(MainContext);


  return (
    <>
      <div style={{ paddingTop: "100px" }}>
        <Helmet>
          <title>Add Blogs</title>
        </Helmet>
        <Formik
          initialValues={{
            src:"",
            title:"",  
            description:"",
            description1:"",
            category:"",
            author:"",
            uploadTime:""
          }}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            axios
              .post("http://localhost:8080/api/blogs", values)
              .then((res) => {
                console.log(res.data)
                setBlogs([...blogs, res.data.data]);
                resetForm();
                setSubmitting(false);
              })
              .catch((error) => {
                console.error("Error adding the blog:", error);
                alert("There was an error adding the blog!")
                setSubmitting(false);
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form
              className="container text-light p-5 gap-3 d-flex flex-column w-50 mt-5 rounded-3 mb-5 bg-dark"
              onSubmit={handleSubmit}
            >
              <label htmlFor="title" className="form-label">
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter title"
                className="form-control"
                id="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title && (
                <div className="text-danger">{errors.title}</div>
              )}

              <label htmlFor="description" className="form-label">
                Blog Description
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter description"
                className="form-control"
                id="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              {errors.description && touched.description && (
                <div className="text-danger">{errors.description}</div>
              )}

              <label htmlFor="src" className="form-label">
                Blog Image
              </label>
              <input
                type="text"
                name="src"
                placeholder="Enter image url"
                className="form-control"
                id="src"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.src}
              />
              {errors.src && touched.src && (
                <div className="text-danger">{errors.src}</div>
              )}

              <label htmlFor="price" className="form-label">
                Blog Special Description
              </label>
              <input
                type="text"
                name="description1"
                id="price"
                placeholder="Enter special description"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description1}
              />
              {errors.description1 && touched.description1 && (
                <div className="text-danger">{errors.description1}</div>
              )}

              <label htmlFor="category" className="form-label">
                Blog Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Enter Category"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
              />
              {errors.category && touched.category && (
                <div className="text-danger">{errors.category}</div>
              )}
              
              <label htmlFor="author" className="form-label">
                Blog Author
              </label>
              <input
                type="text"
                name="author"
                id="author"
                placeholder="Enter Author's name"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
              />
              {errors.author && touched.author && (
                <div className="text-danger">{errors.author}</div>
              )}

              <label htmlFor="upload" className="form-label">
                Blog Upload Time
              </label>
              <input
                type="text"
                name="uploadTime"
                id="upload"
                placeholder="Enter Upload Time"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.uploadTime}
              />
              {errors.uploadTime && touched.uploadTime && (
                <div className="text-danger">{errors.uploadTime}</div>
              )}

              <button className="btn btn-primary mt-3" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Adding...' : 'ADD'}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddBlogs;
