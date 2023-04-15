import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import { Details, Loader } from '../../components/index';

export const DetailsPage = () => {
  const { id } = useParams();
  const { getPokemonByID } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState({});

  const fetchPokemon = async (id:any) => {
		const data = await getPokemonByID(id);
		setPokemon(data);
		setLoading(false);
	};

	useEffect(() => {
    const timer = setTimeout(() => {
      fetchPokemon(id);
    }, 250);
    return () => clearTimeout(timer);
		
	}, []);

  return (
    <>
    {
      loading ? (
        <Loader />
      ) : (
        <Details pokemon={pokemon} />
      )
    }
    </>
  )
  
  
}