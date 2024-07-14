// styling
import styles from './style.module.scss';

// components
import Spring from '@components/Spring';
import ListButton from '@ui/ListButton';
import LazyImage from '@components/LazyImage';

// assets
import usdt from '@assets/crypto/usdt.svg';

const NFTAuthorItem = ({item, withButton = false, withBorder = true, index}) => {
    return (
        <Spring type="list" index={index}>
            <div className={`card ${withBorder ? 'bordered' : ''} d-flex flex-column g-8 p-16`}>
                <div className={styles.media}>
                    <LazyImage className={styles.media_img} src={item.image} alt={item.name}/>
                </div>
                <div className="main">
                        <span className="main_collection text-8 text-600" style={{color: '#EB892B'}}>
                            {item.collection}
                        </span>
                    <div className="d-flex align-items-center justify-content-between g-10">
                        <h4 className="text-overflow">{item.name}</h4>
                        <div className="d-flex align-items-center g-4">
                                <span className="crypto-icon--sm crypto-icon--alt">
                                    <img src={usdt} alt="usdt" />
                                </span>
                            <span className="text-700 text-header">{item.price.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                {withButton && <ListButton/>}
            </div>
        </Spring>
    )
}

export default NFTAuthorItem