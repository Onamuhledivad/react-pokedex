import { background } from '../../../../interfaces/backgroundColor';
import styles from './style.module.css';

export const ListTypes = ({ pokemon }: any) => {
    return (
      <div className={styles.types}>
        {/* @ts-ignore */}
        {pokemon?.types.map(({ type: { name } }) => (
          <div
            key={name}
            /* @ts-ignore */
            style={{ background: background[name] 
            }}
            className={styles.type}
          >
            {name}
          </div>
        ))}
      </div>
    );
  };
  