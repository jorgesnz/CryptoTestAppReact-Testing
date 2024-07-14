// styling
import styles from './style.module.scss';

// components
import LazyImage from '@components/LazyImage';
import Spring from '@components/Spring';

const CollectionItem = ({item, index, animation = "list", withFixedWidth, withBorder}) => {
    return (
        <Spring type={animation} index={index}>
            <div className={`${styles.wrapper} ${withFixedWidth ? styles.w160 : ''} card ${withBorder ? 'bordered' : ''}`}>
                <div className={styles.media}>
                    <div className={styles.media_wrapper}>
                        <LazyImage className={styles.media_img} src={item.image} alt={item.name}/>
                    </div>
                </div>
                <div className={styles.main}>
                    <div className="avatar avatar--bordered sm">
                        <LazyImage src={item.avatar} alt="author"/>
                    </div>
                    <h4 className="text-overflow">{item.name}</h4>
                    <p className={styles.main_text}>{item.description}</p>
                </div>
            </div>
        </Spring>
    )
}

export default CollectionItem