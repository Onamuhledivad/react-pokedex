import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';
import styles from './style.module.css';

export const Form = () => {

    const { onInputChange, valueSearch, onResetForm } =
		useContext(PokemonContext);

	const navigate = useNavigate();

	const onSearchSubmit = (e:any) => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch,
		});

		onResetForm();
	};
    
  return (
    <form onSubmit={onSearchSubmit} className={styles.form}>
				<div className={styles.formGroup}>
						<input
						className={styles.formInput}
							type='search'
							name='valueSearch'
							value={valueSearch}
							onChange={onInputChange}
							placeholder='Buscar(Name,Type,No.)'
							required
							maxLength={15}
						/>
				</div>
		<input className={styles.btnSearch} type='submit' value='Buscar' />
	</form>
  )
}
