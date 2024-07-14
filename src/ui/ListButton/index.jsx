// styling
import styles from './style.module.scss';

// hooks
import {useState} from 'react';
import {useModal} from '@contexts/modalContext';

// utils
import {memo} from 'react';

const ListButton = ({className}) => {
    const [isListed, setIsListed] = useState(false);
    const {handleOpen} = useModal();

    const handleClick = () => {
        setIsListed(!isListed);
        !isListed && handleOpen('list');
    }

    return (
        <button className={`${styles.button} ${className === 'accent' ? styles.accent : ''} ${isListed ? styles.active : ''}`}
                onClick={handleClick}
                aria-label={isListed ? 'Delist' : 'List now'}>
           <span className={`${styles.button_text} ${!isListed ? styles.active : ''}`}>Añadir</span>
           <span className={`${styles.button_text} ${isListed ? styles.active : ''}`}>Quitar</span>
        </button>
    )
}

export default memo(ListButton);