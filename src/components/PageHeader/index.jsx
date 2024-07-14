// styling
import styles from './style.module.scss';

// components
import Helmet from 'react-helmet';
import Search from '@ui/Search';
import RangeSlider from '@ui/RangeSlider';

// hooks
import {useWindowSize} from 'react-use';
import {useNavigate} from 'react-router-dom';
import {useSidebar} from '@contexts/sidebarContext';
import {useState} from 'react';
import {useModal} from '@contexts/modalContext';
import {useThemeProvider} from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';
import {memo} from 'react';

const MobileHeader = ({title, variant, query, setQuery, isMobile}) => {
    const {handleOpen} = useModal();
    const navigate = useNavigate();

    switch (variant) {
        case 'Dashboard':
            return (
                <>
                    <button className="btn btn--icon"
                            aria-label="Mi Cuenta"
                            onClick={() => handleOpen('account')}>
                        <i className="icon-user"/>
                    </button>
                    <Search className="flex-1" placeholder="Búscar" id="globalSearch" value={query}
                            onChange={setQuery}/>
                    <button className="btn--icon card"
                            aria-label="Mostrar Notificaciones"
                            onClick={() => handleOpen('notifications')}>
                        <i className="icon-notification"/>
                    </button>
                </>
            )
        default:
            return (
                <>
                    <button className="text-16" onClick={() => navigate(-1)} aria-label="Ir a la página">
                        <i className="icon-chevron-left"/>
                    </button>
                    <h1 className={isMobile ? 'h2' : ''}>{title}</h1>
                    <button className="btn--icon card" aria-label="Búscar">
                        <i className="icon-search"/>
                    </button>
                </>
            )
    }
}

const DesktopHeader = ({isMobile, isTablet, title, query, setQuery}) => {
    const {open, setOpen} = useSidebar();
    const {fontScale, setFontScale} = useThemeProvider();

    return (
        <>
            <h1 className={isMobile ? 'h2' : ''}>{title}</h1>
            <div className="d-flex g-16">
                <div className="d-flex align-items-center g-40">
                    <div className="d-flex align-items-center g-16 text-uppercase text-600">
                        Escala de Texto
                        <RangeSlider value={fontScale}
                                     onChange={e => setFontScale(e.target.value)}
                                     min={1}
                                     max={1.06}
                                     step={0.01}/>
                    </div>
                    <Search placeholder="Búscar" id="globalSearch" value={query} onChange={setQuery}/>
                </div>
                {
                    isTablet &&
                    <button className={styles.button} onClick={() => setOpen(!open)}>
                        <i className="icon-bars-regular text-large"/>
                    </button>
                }
            </div>
        </>
    )
}

const PageHeader = ({title, variant = 'main'}) => {
    const [query, setQuery] = useState('');
    const isMobile = useWindowSize().width < 768;
    const isTablet = useWindowSize().width < 1920;

    const commonProps = {
        title,
        isMobile,
        query,
        setQuery
    }

    const mobileProps = {
        ...commonProps,
        title,
        variant,
    }

    const desktopProps = {
        ...commonProps,
        isTablet,
    }

    return (
        <>
            <Helmet>
                <title>{title} | CryptoTest App</title>
            </Helmet>
            <div className={styles.container}>
                {
                    isMobile ?
                        <MobileHeader {...mobileProps}/>
                        :
                        <DesktopHeader {...desktopProps}/>
                }
            </div>
        </>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['dashboard', 'main']),
}

export default memo(PageHeader);