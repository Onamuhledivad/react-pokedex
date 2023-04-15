import { Link } from 'react-router-dom'
import { Form } from '../index';
import styles from './style.module.css';
import pokelogo from '../../assets/logo.png';

export const Header = () => {
  return (
    <header className={styles.header}>
    <Link to='/' className={styles.logo}>
        <img
            src={pokelogo}
            alt='Logo Pokedex'
        />
    </Link>
    <Form />
    </header>
  )
}
