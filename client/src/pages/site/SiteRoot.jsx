import React, { useEffect } from 'react'
import Header from '../../layout/site/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/site/Footer/Footer'
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const SiteRoot = () => {
  return (
<>
<ScrollToTop/>
      <Header/>
      <Outlet/>
      <Footer/>
</>
  )
}

export default SiteRoot
