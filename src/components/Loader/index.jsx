// components
import Fade from '@mui/material/Fade';

// styling
import styles from './style.module.scss';

// assets
import loader from '@assets/loader.svg';

const Loader = ({visible}) => {
    return (
        <div className="app">
            <div className="app_container">
                <Fade in={visible} timeout={400}>
                    <div className={styles.container}>
                        <img className={styles.animation} src={loader} alt="loader" />
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Loader