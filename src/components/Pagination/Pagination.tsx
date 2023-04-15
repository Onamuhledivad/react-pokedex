import styles from './stye.module.css';
import arrow from '../../assets/arrow.png';

interface Props {
  perPage: number;
  page: number;
  nextPage: () => void;
  previousPage: () => void;
  maxItems: number;
}

export const Pagination = ({
  perPage,
  page,
  nextPage,
  previousPage,
  maxItems,
}: Props) => {
  const lastPage = Math.ceil(maxItems / perPage);

  return (
    <div className={styles.pagination}>
      <button 
        className={styles.button}
        disabled={page === 1} 
        onClick={previousPage}>
        <img src={arrow} alt='Arrow Left' className={styles.arrowLeft}/>
      </button>
      <span>{page}</span>
      <button 
        className={styles.button}
        disabled={page === lastPage} 
        onClick={nextPage}>
       <img src={arrow} alt='Arrow Right' />
      </button>
    </div>
  );
};
