import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Wrapper() {
    useEffect(() => {

    }, []);

    return (
    <>
        <header className="text-center fixed-top">

            <h1 className="text-center mb-0 mt-3">    

                <Link to="/" className="text-secondary text-decoration-none fs-2">Progressive Web App</Link>
                
            </h1>

        </header>
    </>
    );
}