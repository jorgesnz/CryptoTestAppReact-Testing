// styling
import styles from './style.module.scss';

// components
import Spring from '@components/Spring';
import LazyImage from '@components/LazyImage';

// utils
import classNames from 'classnames';
import {memo} from 'react';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// constants
import ACTIONS from '@constants/actions';

// assets
import banner from '@assets/banner/1.webp';

const QuickActions = () => {
    const {theme} = useThemeProvider();

    return (
        <Spring className="widget">
            <div className={classNames('widget_body card g-0', {'card--no-bg': theme === 'light'})}>
                <h2>Acciones Rápidas</h2>
                <div className={`${styles.banner} card card--abstract`}>
                    <h3 className={`${styles.banner_text} text-white text-large`}>
                        Consigue un bono de 4030 USDT
                    </h3>
                    <LazyImage className={styles.banner_img} effect="opacity" src={banner} alt="banner"/>
                </div>
                <div className={styles.list}>
                    {
                        ACTIONS.map(action => {
                            return (
                                <div className={`${styles.list_item} card bordered bordered--hover`} key={action.title}>
                                    <div className={styles.content}>
                                        <div className="symbol">{action.icon}</div>
                                        <h4>{action.title}</h4>
                                    </div>
                                    {action.primary && <i className="icon icon-chevron-right"/>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Spring>
    )
}

export default memo(QuickActions);