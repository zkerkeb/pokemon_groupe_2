import { useEffect, useState } from "react";

import './index.css';
import PokeTitle from "./pokeTitle";
import PokeImage from "./pokeImage";

const PokeCard = ({ pokemon }) => {
    const [pokeState, setPokeState] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(pokemon.url)
            .then((response) => response.json())
            .then((data) => {
                setPokeState(data);
                console.log("Détails du Pokémon reçus:", data);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des détails du Pokémon:", error);
            }).finally(() => {
                setLoading(false);
            });


    }, [pokemon]);

    if (loading) {
        return <p>Chargement du Pokémon...</p>;
    }


    return (
        <div className="poke-card">
            <div className={`poke-card-header poke-type-${pokeState.types?.[0]?.type?.name}`}>
                <PokeTitle name={pokemon.name} />
            </div>
            <div className="poke-image-background">
                <PokeImage imageUrl={pokeState.sprites?.other?.['official-artwork']?.front_default} />
            </div>
            <div>

                {pokeState.stats?.map((stat) => {
                    return(
                        <div className="poke-stat-row" key={stat.stat.name}>
                            <span className={`poke-type-font poke-type-${stat.stat.name}`}>{stat.stat.name}</span>

                            <span className="poke-type-font poke-stat-value">{stat.base_stat}</span>
                        </div>
                    ) 
                })}    

                {/* <p>{pokeState?.stats[0]?.base_stat}</p>
                <p>{pokeState?.stats[0]?.stat?.name}</p> */}
            </div>
        </div>
    );
}

export default PokeCard;