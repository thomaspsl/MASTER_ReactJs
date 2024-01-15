import { useEffect } from "react";

export default function Wrapper() {
    useEffect(() => {

    }, []);

    return (
    <>
        <header className="text-center fixed-top">

            <p className="mb-0 mt-3">I'm the Header</p>

        </header>
    </>
    );
}