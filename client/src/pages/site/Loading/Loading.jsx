import React from "react";
import logo2 from "../../../assets/logo2.png";
const Loading = () => {
  return (
    <>
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img
                alt
                data-cfsrc={logo2}
                style={{ display: "none", visibility: "hidden" }}
              />
              <img src={logo2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
