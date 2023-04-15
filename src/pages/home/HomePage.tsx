import { useContext } from 'react';
import { Header, Grid, Footer, Pagination } from '../../components/index';
import { usePagination } from '../../hooks/usePagination';
import { PokemonContext } from '../../context/PokemonContext';
import styles from './style.module.css';

export const HomePage = () => {

  const { page, nextPage, previousPage } = usePagination();
  const { allPokemons } = useContext(PokemonContext);

  return (
    <>
    <main className={styles.main}>
      <Header />
      <Grid 
        getData={allPokemons}
        page={page} 
        perPage={20}
      />
      <Pagination
            page={page}
            perPage={20}
            nextPage={nextPage}
            previousPage={previousPage}
            maxItems={allPokemons?.length}
            />
    </main>
    <Footer />
    </>
  )
}
