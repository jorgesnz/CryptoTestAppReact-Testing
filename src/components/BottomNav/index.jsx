// styling
import styles from './style.module.scss';

// components
import {NavLink} from 'react-router-dom';

// constants
import LINKS from '@constants/links';

// utils
import {memo} from 'react';

// hooks
import {useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';
import {useThemeProvider} from '@contexts/themeContext';
import useAuthRoute from '@hooks/useAuthRoute';

const BottomNav = () => {
    const ref = useRef(null);
    const location = useLocation();
    const {theme} = useThemeProvider();
    const isActive = (path) => location.pathname === path;
    const isAuthRoute = useAuthRoute();

    useEffect(() => {
        const height = ref.current.offsetHeight;
        window.document.documentElement.style.setProperty('--bottom-nav-height', `${height}px`);

        return () => {
            window.document.documentElement.style.removeProperty('--bottom-nav-height');
        }
    }, []);

    return (
       <>
           {
                !isAuthRoute ? (
                   <div className={`${styles.container} ${theme === 'dark' ? styles.dark : ''}`} ref={ref}>
                       {
                           LINKS.map(link => {
                               const {icon, path, desktop, mobile} = link;
                               const isSm = icon === 'collections';

                               return (
                                   <NavLink className={`nav-link ${isActive(path) ? 'active' : ''}`} to={path} key={path}>
                            <span className="wrapper">
                                <i className={`icon icon-${icon} ${isSm ? 'sm' : ''}`}/>
                                <i className={`icon icon-fill ${isActive(path) ? 'active' : ''} icon-${icon}${icon !== 'trade' ? '-active' : ''} ${isSm ? 'sm' : ''}`}/>
                            </span>
                                       {mobile ? mobile : desktop}
                                   </NavLink>
                               )
                           })
                       }
                   </div>
               ) : null
           }
       </>
    )
}

export default memo(BottomNav);