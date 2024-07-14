// styling
import styles from './style.module.scss';

// components
import Spring from '@components/Spring';
import LazyImage from '@components/LazyImage';

// assets
import img from '@assets/nft/blockchain.webp';

const NFTBanner = () => {
    return (
        <Spring>
            <div className={`${styles.container} card card--abstract`}>
                <p className={`${styles.main} text-white h2`}>
                    Buy and sell digital collectible <span className="text-accent">NFT</span>
                </p>
                <LazyImage className={styles.media} src={img} alt="media"/>
            </div>
        </Spring>
    )
}

export default NFTBanner