import { Pagination } from '../../../../pokemon/src/interfaces/interfaces';
import { Card } from '../index';
import styles from './style.module.css';

export const Grid = ({getData, page, perPage }: Pagination) => {

  return (
    <div className={styles.pokemonContent}>
        { getData
          .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
          .map( (data:any) =>(
          <Card pokemon={data} key={data.id}/>
        ))}
    </div>
  )
}
