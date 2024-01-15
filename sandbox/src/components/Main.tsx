import { useEffect } from "react";

import Agenda from "./Agenda";

export default function Wrapper(props: any) {
    useEffect(() => {

    }, []);

    function OnPressed() {
        window.location.href = "https://www.youtube.com/watch?v=JKiApaUgM-A";
    }

    return (
    <>
        <div className="position-fixed w-100 h-100 d-flex">

            <div className="m-auto">

                <Agenda />

            </div>

        </div>
    </>
    );
}