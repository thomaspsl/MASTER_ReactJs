import { useEffect, useState } from "react";

import Button from "../components/Button";
import PokemonCard from "../components/PokemonCard";

export default function Wrapper(props: any) {
    const [pokemons, setPokemons] = useState<any>([]);
    const [extended, setExtended] = useState<Boolean>(false);

    useEffect(() => {
        fetchPokemons(getGenerationsFromIndex(props.generation.id));
    }, [props.generation.id]);

    async function fetchPokemons(api: string) {
        const response = await fetch(api);
        const data = await response.json();
        setPokemons(data.pokemon_species);
        console.log(data.pokemon_species);
    }

    function getGenerationsFromIndex(index: number){
        return `https://pokeapi.co/api/v2/generation/${index}`; 
    }

    function getIndexFromUrl(url: string){     
        const parsedUrl = url.split('/');     
        return parsedUrl[parsedUrl.length - 2]; 
    }

    function toggled(){
        setExtended(!extended)
    }

    return (
    <>
        <div key={props.generation.id} className="p-1">

            <h4>{props.generation.name}</h4>

            <div className="d-flex justify-content-between flex-wrap gap-card">

            {pokemons?.map((pokemon: any, index: number) => {
                if (!extended) {
                    if (index <= 4) {
                        return <PokemonCard key={index} index={getIndexFromUrl(pokemon.url)} pokemon={pokemon} />;
                    }
                } else {
                    return <PokemonCard key={index} index={getIndexFromUrl(pokemon.url)} pokemon={pokemon} />;
                }
            })}

        </div>

        <Button text={!extended ? "Voir plus" : "Voir moins"} color="btn-secondary" onClick={toggled}/>

        </div>
    </>
    );
}