import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';
import { Grid, Footer, Header } from '../../components/index';
import styles from './style.module.css';

export const SearchPage = () => {
  const location = useLocation();
  const input = location.state;

  let msg;
  let total;
  const { allPokemons } = useContext(PokemonContext);

    const findName = allPokemons.filter((obj:any) =>{
      return obj.name.includes(input);
    });
  
    const findType = allPokemons.filter((obj:any) =>{
      return obj.types[0].type.name.includes(input);
    });
  
    const idpoke = allPokemons.filter((obj:any) => {
      return obj.id == input;
    });

    total = [ ...idpoke,...findName, ...findType];
    const result = total.reduce((poke, item) => {
      if(!poke.includes(item)){
        poke.push(item);
      };
      return poke;
  }, []);

  if(result.length != 0){
    msg = `Se encontraron ${result.length} resultado(s) para: ${input}`
    
  } else {
    msg = `Sin Resultados :(`;
  };

  return (
    <>
    <Header />
    <main className={styles.main}>
              <div className={styles.divText}>
                <p className={styles.textP}>{msg}</p>
              </div>

              <Grid
                getData={result}
                page={1}
                perPage={20} />
            </main>
      <Footer />
    </>
  )
}
