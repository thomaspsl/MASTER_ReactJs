import { useEffect } from "react";

export default function Wrapper(props: any) {
    useEffect(() => {

    }, []);

    return (
    <>
        <div className="mb-3 card">

            <div className="card-body">

                <h5 className="card-title">{props.title} <span className="fs-6">- {props.date}</span></h5>

                <p className="card-text">{props.content}</p>

            </div>
        
        </div>
    </>
    );
}