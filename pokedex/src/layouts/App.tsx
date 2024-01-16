import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../layouts/Header";

export default function Wrapper() {
    useEffect(() => {

    }, []);

    return (
    <>      
        <Header />    

        <Outlet />
    </>
    );
}