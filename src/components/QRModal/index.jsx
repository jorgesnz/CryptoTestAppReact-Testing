// styling
import styles from './style.module.scss';

// components
import ModalContainer from '@components/ModalContainer';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// assets
import qr from '@assets/qr-code.svg';

const QRModal = ({open, handleClose}) => {
    const {theme} = useThemeProvider();

    return (
        <ModalContainer open={open}>
            <div className={`${styles.wrapper} modal card`}>
                <div className={styles.header}>
                    <h2 className="text-large">Invite Friends</h2>
                    <p className="text-14">Send it to your friend or show them the QR code</p>
                </div>
                <div className={`${styles.main} qr-code`}>
                    <img src={qr} alt="qr code" />
                </div>
                <div className="d-flex flex-column g-16">
                    <button className="btn" onClick={handleClose}>Share</button>
                    <button className={`btn ${theme === 'light' ? 'btn--light' : 'btn--invert'}`} onClick={handleClose}>
                        Download
                    </button>
                </div>
            </div>
        </ModalContainer>
    );
}

export default QRModal