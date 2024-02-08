import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Wrapper() {
    useEffect(() => {

    }, []);

    return (
    <>      
        <Outlet />
    </>
  );

}