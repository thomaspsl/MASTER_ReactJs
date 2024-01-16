import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Wrapper(props: any) {
    useEffect(() => {

    }, []);

    return (
    <>
        <nav className="position-fixed h-100 p-4 z-3 d-flex">

            <ul className="list-unstyled m-auto">
                
                <li>
                    <Link to="/" className="text-secondary text-decoration-none fs-3">Home</Link>
                </li>

                <li>
                    <Link to="/agenda" className="text-secondary text-decoration-none fs-3">Agenda</Link>
                </li>

                <li>
                    <Link to="/counter" className="text-secondary text-decoration-none fs-3">Counter</Link>
                </li>

                <li>
                    <Link to="/typer" className="text-secondary text-decoration-none fs-3">Typer</Link>
                </li>

                <li>
                    <Link to="/weather" className="text-secondary text-decoration-none fs-3">Weather</Link>
                </li>

            </ul>

        </nav>
    </>
    );
}