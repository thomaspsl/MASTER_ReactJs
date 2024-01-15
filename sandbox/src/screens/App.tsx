import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Wrapper() {
    useEffect(() => {

    }, []);

    return (
    <>
        <Sidebar />
      
        <Header />    

        <Outlet />
    
        <Footer />    
    </>
  );
}