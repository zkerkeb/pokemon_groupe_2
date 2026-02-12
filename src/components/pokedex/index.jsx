import { useEffect,useState } from "react";
import axios from "axios";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/pokemons'
        }).then((response) => {
            console.log('response', response.data);
            setPokemons(response.data);
        }).catch((error) => {
            console.error('Error fetching pokemons:', error);
        });

    }, [])
    return (
        <div>
            <h1>Pokedex</h1>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.id}>{pokemon.name.french}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pokedex;