import { useEffect } from "react";

export default function Wrapper(props: any) {
    useEffect(() => {

    }, []);

    return (
    <>
        <div className="mb-3">
            
            <input 
                id={props.id} 
                name={props.name} 
                type={props.type} 
                placeholder={props.placeholder} 
                className="form-control" 
                value={props.value} 
                onChange={props.onChange}
            />

        </div>
    </>
    );
}