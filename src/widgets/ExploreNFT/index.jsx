// styling
import styles from './style.module.scss';

// components
import BrowseCategories from '@widgets/BrowseCategories';
import TopMovers from '@widgets/TopMovers';
import PopularCollections from '@widgets/PopularCollections';
import Spring from '@components/Spring';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

const Explore = () => {
    const {theme} = useThemeProvider();

    return (
        <Spring className="widget">
            <div className="widget_header">
                <span className="symbol">🚀</span>
                <h2>Explorar</h2>
            </div>
            <div className={`${styles.wrapper} widget_body card ${theme === 'light' ? 'card--no-bg' : ''}`}>
                <BrowseCategories variant="nav"/>
                <TopMovers/>
                <PopularCollections standalone={false}/>
            </div>
        </Spring>
    )
}

export default Explore