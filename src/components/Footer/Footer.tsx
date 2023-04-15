import { NavLink } from 'react-router-dom';
import styles from './style.module.css';
import pokeImg from '../../assets/pikachu.png';


export const Footer = () => {
    const now = new Date();
    return(
        <footer className={styles.footer}>
            <p>Pokémon © {now.getFullYear()}</p>
            <img src={pokeImg} alt='Img Footer' className={styles.footImg}/>
            <NavLink target='_blank' to='https://www.linkedin.com/in/ticsdavidromero/'><p>David Romero</p></NavLink>
        </footer>
    );
};