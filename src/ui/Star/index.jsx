// styling
import styles from './style.module.scss';

// components
import {ReactComponent as StarOutlined} from '@assets/icons/icon-star-o.svg';
import {ReactComponent as StarFilled} from '@assets/icons/icon-star-fill.svg';

// utils
import {memo} from 'react';

const Star = ({active = false, onClick}) => {
    return (
        <div className={styles.wrapper} onClick={onClick}>
            <StarFilled className={`${styles.icon} ${active ? styles.visible : styles.hidden}`} />
            <StarOutlined className={`${styles.icon} ${active ? styles.hidden : styles.visible}`} />
        </div>
    )
}

export default memo(Star);