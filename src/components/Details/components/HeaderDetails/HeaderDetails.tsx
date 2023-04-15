import { useNavigate } from "react-router-dom";
import styles from './style.module.css';
import  ArrowLeftIcon  from '../../../../assets/arrow.png';


export const HeaderDetails = ({ pokemon }: any) => {
    const navigate = useNavigate();
  
    return (
      <header className={styles.header}>
        {/* <div className={styles.circle}></div> */}
        <div className={styles.back} onClick={() => navigate(-1)}>
          <img src={ArrowLeftIcon} className={styles.arrowLeft}  alt='Pokeball'/>
          <span>Regresar</span>
        </div>
        <div className={styles.title}>
          <h1>#{pokemon?.id}</h1>
          <h2>{pokemon?.name}</h2>
        </div>
      </header>
    );
  };