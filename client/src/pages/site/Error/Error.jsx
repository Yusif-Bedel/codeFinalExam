import React from "react";
import './Error.css'
import error from '../../../assets/error.svg'
const Error = () => {
  return (
    <>
      <div id="oopss" >
        <div id="error-text">
          <img
            src={error}
            alt="404"
          />
          <span>404 PAGE</span>
          <p className="p-a">. The page you were looking for could not be found</p>
          <p className="p-b">... Back to previous page</p>
          <a href="#" className="back">
            ... Back to previous page
          </a>
        </div>
      </div>
    </>
  );
};

export default Error;
