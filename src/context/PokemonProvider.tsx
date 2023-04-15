import { useState, useEffect } from 'react';
import { PokemonContext } from './PokemonContext';
import { AllPokemonsResult } from '../interfaces/interfaces';
import { useForm } from '../hooks/useForm';

const PokemonProvider = ({children}: any) => {

      const [allPokemons, setAllPokemons] = useState([]);
      const [loading, setLoading] = useState(true);

      // Utilizar CustomHook - useForm
	const { valueSearch, onInputChange, onResetForm } = useForm({
		valueSearch: '',
	});

    //Obtener los primeros 150 pokemons
    const getAllPokemons = async () => {
        const baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=150`;
        const res = await fetch(baseUrl);
        const data = await res.json();
        const promises = data.results.map(async (pokemon:AllPokemonsResult) => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const results = await Promise.all(promises);
		setAllPokemons([
            ...allPokemons,
            ...results
        ]);
		setLoading(false);
    }

    // Buscar a un pokemon por ID
	const getPokemonByID = async (id:string) => {
		const baseURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(baseURL);
		const data = await res.json();
		return data;
	};

    useEffect(() =>{
        getAllPokemons()
    }, []);


  return (
   <PokemonContext.Provider 
   value={{
                valueSearch,
				onInputChange,
				onResetForm,
				allPokemons,
				getPokemonByID,
    }}>
    {children}
   </PokemonContext.Provider>
  )
}
export default PokemonProvider;