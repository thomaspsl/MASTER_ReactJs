import { useEffect } from "react";

export default function Wrapper(props: any) {
    useEffect(() => {
        document.title = props.title;
    }, [props.title]);

    return (
    <>
        <div className="position-fixed w-100 h-100 d-flex">

            <div className="m-auto">

                <h1>Hello World !</h1>

            </div>

        </div>
    </>
    );
}