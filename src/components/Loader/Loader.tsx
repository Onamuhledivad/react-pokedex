import { SuperBalls } from '@uiball/loaders';
import style from  './style.module.css';

export const Loader = () => {
	return (
        <div className={style.container}>
            <SuperBalls 
            size={45}
            speed={1.4} 
            color='#004d85'
            />
        </div>
    )
};