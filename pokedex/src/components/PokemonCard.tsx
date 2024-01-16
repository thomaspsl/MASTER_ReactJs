import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Wrapper(props: any) {
    useEffect(() => {

    }, []);

    function getImageSrcFromIndex(index: number){   
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`; 
    }

    return (
    <>
        <Link to={"/pokemon/" + props.pokemon.name}>

            <div key={props.index} className="card pokemon text-center">

                <img src={getImageSrcFromIndex(props.index)} alt="pokemon"/>

                <p>{props.pokemon.name}</p>

            </div>

        </Link>
    </>
    );
}