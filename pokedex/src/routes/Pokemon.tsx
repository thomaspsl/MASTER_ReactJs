import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function Wrapper(props: any) {
    const [pokemon, setPokemon] = useState<any>([]);
    const { name } = useParams();

    useEffect(() => {
        document.title = props.title;
        fetchPokemon("https://pokeapi.co/api/v2/pokemon/" + name)
    }, [props.title, name]);

    async function fetchPokemon(api: string) {
        const response = await fetch(api);
        const data = await response.json();
        setPokemon(data);
    }

    return (
        <>
            <link rel="stylesheet" href={process.env.PUBLIC_URL + '/assets/css/pokemon.css'} />

            <div className="position-fixed w-100 h-100 d-flex">

                <div className="m-auto text-center">

                    <div className="card pb-3 card-pokemon">

                        <div className="row">

                            <div className="col-md-4 d-flex flex-column">

                                <img src={pokemon.sprites?.front_default} className="pokemon-img rounded-start" alt="img" />

                                <img src={pokemon.sprites?.front_shiny} className="pokemon-img rounded-start" alt="img" />

                            </div>

                            <div className="col-md-8">

                                <div className="card-body">

                                    <h5 className="card-title">{pokemon.species?.name}</h5>

                                    <p className="card-text">Height : {pokemon.height}</p>

                                    <p className="card-text">Weight : {pokemon.weight}</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}