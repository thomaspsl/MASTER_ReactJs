import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Menus from "../layouts/Menus";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function Wrapper() {
    useEffect(() => {

    }, []);

    return (
    <>
        <Menus />
      
        <Header />    

        <Outlet />
    
        <Footer />    
    </>
  );
}