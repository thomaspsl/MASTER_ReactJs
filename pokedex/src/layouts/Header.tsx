import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Wrapper() {
    useEffect(() => {

    }, []);

    return (
    <>
        <header className="text-center bg-white">

            <h1 className="text-center mt-3 mb-3">    

                <Link to="/" className="text-secondary text-decoration-none fs-2">Pokedex with React</Link>
                
            </h1>

        </header>
    </>
    );
}