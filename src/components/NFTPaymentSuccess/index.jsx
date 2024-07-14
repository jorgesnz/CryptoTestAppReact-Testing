// styling
import styles from './style.module.scss';

// components
import ModalContainer from '@components/ModalContainer';

// hooks
import {useModal} from '@contexts/modalContext';
import {useThemeProvider} from '@contexts/themeContext';

// assets
import img from '@assets/nft/popular/item1.webp';
import usdt from '@assets/crypto/usdt.svg';

const NFTPaymentSuccess = () => {
    const {theme} = useThemeProvider();
    const {open, modal, handleClose} = useModal();

    return (
        <ModalContainer open={open && modal === 'nft-success'} handleClose={handleClose}>
            <div className={`${styles.container} modal card card--abstract card--abstract--lg ${theme === 'light' ? 'card--abstract-light' : ''}`}>
                <div>
                    <h2 className="text-large">Congratulations!</h2>
                    <p className={`text-600 ${theme === 'light' ? 'text-header' : ''}`}>
                        You’ve successfully purchased an NFT.
                    </p>
                </div>
                <div className={styles.media}>
                    <img src={img} alt="NFT Item" />
                </div>
                <div className={styles.main}>
                    <h3 className="h2">CharllineChite #17989</h3>
                    <div className={styles.main_details}>
                        <span className="text-10 text-light">Contract Address</span>
                        <p className="text-header text-600">TockenhfjrYU87BV3exjsl23Rup98</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between lh-1">
                        <div className="d-flex align-items-center g-8">
                            <span className="crypto-icon--sm crypto-icon--alt">
                                 <img src={usdt} alt="usdt" />
                            </span>
                            <span className="h2">10.24 USDT</span>
                        </div>
                        <span className={`text-10 ${theme === 'light' ? 'text-header' : 'text-light'}`}>$ 10.24</span>
                    </div>
                </div>
                <button className="btn w-100" onClick={handleClose}>View now</button>
            </div>
        </ModalContainer>
    )
}

export default NFTPaymentSuccess