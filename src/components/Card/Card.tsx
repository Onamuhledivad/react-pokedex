import { Link } from 'react-router-dom';
import { background } from '../../interfaces/backgroundColor';
import styles from './style.module.css';

export const Card = ({pokemon}: any) => {
  const getTypes = pokemon?.types[0]?.type?.name;
  /* @ts-ignore */
  const backgroundSelected = background[getTypes];

  return (
    <Link to={`/details/${pokemon.id}`} className={styles.txtLink}>

        <div style={{ background: backgroundSelected }} className={styles.pokemon}>
                    <div className={styles.imgContainer}>
                        <img src={
                            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id}.png`
                            }
                            alt={pokemon.name} />
                    </div>
                    <div className={styles.info}>
                        <span className={styles.number}>#{pokemon.id}</span>
                        <h3 className={styles.name}>{pokemon.name}</h3>
                        <small className={styles.type}>
                            {getTypes}
                        </small>
                    </div>
        </div>

    </Link>

  )
}
