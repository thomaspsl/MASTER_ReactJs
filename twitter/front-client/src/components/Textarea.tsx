import { useEffect } from "react";

export default function Wrapper(props: any) {
    useEffect(() => {

    }, []);

    return (
    <>
        <div className="mb-3">

            <textarea 
                id={props.id} 
                name={props.name} 
                placeholder={props.placeholder} 
                className="form-control" 
                rows={props.rows}
                value={props.value}
                onChange={props.onChange}>
            </textarea>

        </div>
    </>
    );
}