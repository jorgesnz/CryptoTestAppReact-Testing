// styling
import styles from './style.module.scss';

// components
import ModalContainer from '@components/ModalContainer';

// hooks
import {useModal} from '@contexts/modalContext';
import {useThemeProvider} from '@contexts/themeContext';

const NFTPayment = () => {
    const {theme} = useThemeProvider();
    const {open, modal, handleOpen, handleClose} = useModal();

    const handleSubmit = () => {
        handleClose();
        handleOpen('nft-success');
    }

    return (
        <ModalContainer open={open && modal === 'nft-pay'} handleClose={handleClose}>
            <div className={`${styles.container} modal card card--abstract card--abstract--md  ${theme === 'light' ? 'card--abstract-light' : ''}`}>
                <div className="d-flex flex-column">
                    <h2>You’ll Pay</h2>
                    <span className={`${styles.price} text-large text-header`}>10.24 USDT</span>
                    <span className="text-header">$ 10.24</span>
                </div>
                <div className={`${styles.message} ${theme === 'light' ? styles.light : styles.dark}`}>
                    <p className="text-10 text-light">The payment will be made using your Account</p>
                    <h3>10.24 USDT</h3>
                </div>
                <button className="btn w-100" onClick={handleSubmit}>Buy now</button>
            </div>
        </ModalContainer>
    )
}

export default NFTPayment