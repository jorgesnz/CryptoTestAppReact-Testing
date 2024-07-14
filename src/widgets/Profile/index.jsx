// styling
import styles from './style.module.scss';

// components
import AuthorCard from '@components/AuthorCard';
import AuthorItems from '@components/AuthorItems';
import Spring from '@components/Spring';

// hooks
import { useThemeProvider } from '@contexts/themeContext';
import useMeasure from 'react-use-measure';

// assets
import walletLight from '@assets/icons/icon-wallet-light.svg';
import walletDark from '@assets/icons/icon-wallet-dark.svg';
import historyLight from '@assets/icons/icon-history-light.svg';
import historyDark from '@assets/icons/icon-history-dark.svg';

const Profile = ({ author }) => {
    const { theme } = useThemeProvider();
    const [ref, { height }] = useMeasure();

    if (!author) {
        return <div>Loading...</div>;
    }

    return (
        <Spring className="widget">
            <div ref={ref}>
                <div className="widget_header">
                    <span className="symbol">🐵</span>
                    <h2>Perfil</h2>
                </div>
                <div className="widget_grid d-grid g-16 pb-16">
                    <AuthorCard author={author} isPrivate />
                    <div className="d-grid col-2 g-16">
                        <button className={`${styles.button} card ${theme === 'light' ? 'bordered' : ''}`}>
                            <span className="d-inline-flex align-items-center g-8">
                                <img className="symbol" src={theme === 'light' ? walletLight : walletDark} alt="icon" />
                                Wallet
                            </span>
                            <i className="icon-chevron-right text-dark" />
                        </button>
                        <button className={`${styles.button} card ${theme === 'light' ? 'bordered' : ''}`}>
                            <span className="d-inline-flex align-items-center g-8">
                                <img className="symbol" src={theme === 'light' ? historyLight : historyDark} alt="icon" />
                                Historial
                            </span>
                            <i className="icon-chevron-right text-dark" />
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ height: `calc(100% - ${height}px)` }}>
                <AuthorItems author={author} withBorder={false} withButton />
            </div>
        </Spring>
    );
};

export default Profile;
