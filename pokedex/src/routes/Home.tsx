import { useEffect } from "react";

import generations from "../components/Generations";
import GenerationCard from "../components/GenerationCard";

export default function Wrapper(props: any) {
    useEffect(() => {
        document.title = props.title;
    }, [props.title]);

    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/assets/css/home.css'} />

        <div className="w-100 h-100 d-flex">

            <div className="m-auto container-gen">

                {generations.map((generation: any, index: number) => (

                    <GenerationCard key={index} generation={generation}/>
                    
                ))}

            </div>

        </div>
    </>
    );
}