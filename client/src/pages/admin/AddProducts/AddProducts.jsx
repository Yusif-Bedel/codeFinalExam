import { Formik } from 'formik';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import MainContext from '../../../context/context';
import axios from "axios";

const AddProducts = () => {
  const { products, setProducts } = useContext(MainContext);
  return (
    <>
      <div style={{ paddingTop: "100px" }}>
        <Helmet>
          <title>Add Products</title>
        </Helmet>
        <Formik
          initialValues={{
            images: [], 
            title: "", 
            price: "", 
            description: "", 
            category: "", 
            brand: "sofa", 
            rating: ""
          }}
          onSubmit={(values, { resetForm }) => {
            axios.post("http://localhost:8080/api/products", {
              title: values.title,
              price: values.price,
              images: values.images,
              description: values.description,
              category: values.category,
              brand: values.brand,
              rating: values.rating
            })
            .then((res) => {
              setProducts([...products, res.data.data]);
              resetForm();
            })
            .catch((error) => {
              console.error("There was an error adding the product!", error);
              alert("There was an error adding the product!")
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
          }) => (
            <form
              className="container text-light p-5 gap-3 d-flex flex-column w-50 mt-5 rounded-3 mb-5 bg-dark"
              onSubmit={handleSubmit}
            >
              <label htmlFor="title" className="form-label">
                Product Title
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
              {errors.title && touched.title && <div className="text-danger">{errors.title}</div>}

              <label htmlFor="description" className="form-label">
                Product Description
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
              {errors.description && touched.description && <div className="text-danger">{errors.description}</div>}

              <label htmlFor="images" className="form-label">
                Product Image
              </label>
              <input
                type="text"
                name="images"
                placeholder="Enter image url"
                className="form-control"
                id="images"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.images}
              />
              {errors.images && touched.images && <div className="text-danger">{errors.images}</div>}

              <label htmlFor="price" className="form-label">
                Product Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Enter price"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                min={1}
              />
              {errors.price && touched.price && <div className="text-danger">{errors.price}</div>}
              
              <label htmlFor="category" className="form-label">
                Product Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter category"
                className="form-control"
                id="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
              />
              {errors.category && touched.category && <div className="text-danger">{errors.category}</div>}

              <label htmlFor="brand" className="form-label">
                Product Brand
              </label>
              <select
                name="brand"
                id="brand"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.brand}
              >
                <option value="sofa">Sofa</option>
                <option value="table">Table</option>
                <option value="chair">Chair</option>
                <option value="bed">Bed</option>
              </select>
              {errors.brand && touched.brand && <div className="text-danger">{errors.brand}</div>}

              <label htmlFor="rating" className="form-label">
                Product Rating
              </label>
              <input
                type="number"
                name="rating"
                id="rating"
                placeholder="Enter Rating"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rating}
                min={1}
                max={5}
              />
              {errors.rating && touched.rating && <div className="text-danger">{errors.rating}</div>}

              <button className="btn btn-primary mt-3" type="submit">
                ADD
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddProducts;
