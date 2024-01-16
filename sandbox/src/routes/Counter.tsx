import React, { useEffect, useState } from "react";

import Button from "../components/Button";

export default function Wrapper(props: any) {
    const [count, setCount] = useState<number>(1);

    useEffect(() => {
        document.title = `${props.title} - ${count}`;
    }, [props.title, count]);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
    <>
        <div className="position-fixed w-100 h-100 d-flex">

            <div className="m-auto">

                <h1 className="text-center pb-3">Counter</h1>

                <div className="card p-3 text-center">
                  {count}
                </div>

                <div className="d-flex">
      
                    <Button text="Incrémenter" color="btn-primary" onClick={increment} />

                    <Button text="Décrémenter" color="btn-danger" onClick={decrement} />
            
                </div>

            </div>

        </div>
    </>
    );
}
