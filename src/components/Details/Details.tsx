import { background } from '../../interfaces/backgroundColor';
import { HeaderDetails, ListTypes, Stats } from '../index';
import styles from './style.module.css';

export const Details = ({ pokemon }:any) => {

  const getTypes = pokemon?.types[0]?.type?.name;
  /* @ts-ignore */
  const bgColor = background[getTypes];

  return (
    <div style={{ background: bgColor }} className={styles.bg}>
      <HeaderDetails pokemon={pokemon} />
      <div className={styles.info}>
        <div className={styles.circle}>
        <img
          className={styles.imgPokemon}
          src={
           `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.id
          }.png`
          }
          alt={pokemon?.name}
        />
        </div>
        <ListTypes pokemon={pokemon} /> 
        <Stats pokemon={pokemon} bgColor={bgColor} /> 
      </div>
    </div>
  )
}
