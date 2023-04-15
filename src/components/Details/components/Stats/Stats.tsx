import styles from './style.module.css';

export const Stats = ({ pokemon, bgColor }: any) => {

    return (
      <div className={styles.stats}>
        {/* @ts-ignore */}
        {pokemon?.stats?.map(({ base_stat, stat: { name } }) => {
          return (
            <div key={name} className={styles.column}>
              <span style={{ color: bgColor }}>
                {name}
              </span>
              <p>{base_stat}</p>
            </div>
          );
        })}
      </div>
    );
  };
  