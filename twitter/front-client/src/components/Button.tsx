import { useEffect } from "react";

export default function Wrapper(props: any) {
    useEffect(() => {

    }, []);

    return (
    <>
        <div className="mb-3">

            <button type={props.type} className={"btn " + props.color} onClick={props.onClick}>

                {props.text}

            </button>

        </div>
    </>
    );
}