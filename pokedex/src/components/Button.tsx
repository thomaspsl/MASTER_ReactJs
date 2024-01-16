import { useEffect } from "react";

export default function Wrapper(props: any) {
    useEffect(() => {

    }, []);

    return (
    <>
        <div className="mt-2 mb-3">

            <button 
                type="button" 
                className={"btn " + props.color} 
                onClick={props.onClick}
            >
                {props.text}

            </button>

        </div>
    </>
    );
}