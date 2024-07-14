// styling
import styles from './style.module.scss';

// components
import MarketItem from '@components/MarketItem';
import SortingControl from '@ui/SortingControl';
import Spring from '@components/Spring';
import WidgetHeader from '@components/WidgetHeader';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useThemeProvider} from '@contexts/themeContext';
import {useWindowSize} from 'react-use';
import useMeasure from 'react-use-measure';

// actions
import {handleSort} from '@features/crypto/cryptoSlice';

// assets
import iconLight from '@assets/icons/icon-market-light.svg';
import iconDark from '@assets/icons/icon-market-dark.svg';

const StandaloneWrapper = ({children, height}) => {
    return (
        <ScrollContainer height={height}>
            <div className="track d-flex flex-column g-8">
                {children}
            </div>
        </ScrollContainer>
    )
}

const BuiltInWrapper = ({children}) => {
    return (
        <div className="d-flex flex-column g-8">
            {children}
        </div>
    )
}

const Market = ({standalone = true}) => {
    const {theme} = useThemeProvider();
    const {data, sortDirection} = useSelector(state => state.crypto);
    const [filter, setFilter] = useState('all');
    const [sorting, setSorting] = useState('');
    const dispatch = useDispatch();
    const withTitle = useWindowSize().width < 768;
    const [ref, {height}] = useMeasure();
    const dataArr = standalone ? data : data.slice(0, 5);

    const Wrapper = standalone ? StandaloneWrapper : BuiltInWrapper;
    const wrapperProps = standalone ? {height} : {};

    const handleSorting = (type) => {
        setSorting(type);
        dispatch(handleSort({type: type}));
    }

    const filteredData = () => {
        switch (filter) {
            case 'fav':
                return dataArr.filter(item => item.isFavorite);
            case 'trend':
                return dataArr.filter(item => item.isTrending);
            default:
                return dataArr
        }
    }

    const FilterButton = ({value, label}) => {
        return (
            <button className={filter === value ? 'active' : ''} onClick={() => setFilter(value)}>
                {label}
            </button>
        )
    }

    return (
        <Spring className="widget">
            <div className={`d-flex flex-column g-24 ${standalone ? 'pb-16' : 'pb-8'}`} ref={ref}>
                {
                    standalone &&
                    <div className="d-flex flex-column g-16">
                        {
                            withTitle &&
                            <WidgetHeader className="pb-0" title="Mercado" iconLight={iconLight} iconDark={iconDark}/>
                        }
                        <div className={`tab-list col-3 mb-0 ${theme === 'light' ? 'bordered' : ''}`}>
                            <FilterButton value="fav" label="Favoritas"/>
                            <FilterButton value="all" label="Monedas"/>
                            <FilterButton value="trend" label="Populares"/>
                        </div>
                    </div>
                }
                <div className={styles.sorting}>
                    <div className={styles.sorting_wrapper}>
                        <SortingControl label="Nombre"
                                        active={sorting === 'name'}
                                        sorting={sortDirection}
                                        setSorting={() => handleSorting('name')}/>
                    </div>
                    <SortingControl label="Precio"
                                    active={sorting === 'price'}
                                    sorting={sortDirection}
                                    setSorting={() => handleSorting('price')}/>
                    <SortingControl label="Cambio 24h"
                                    active={sorting === 'change'}
                                    sorting={sortDirection}
                                    setSorting={() => handleSorting('change')}/>
                </div>
            </div>
            <Wrapper {...wrapperProps}>
                {
                    filteredData().length > 0 ?
                        filteredData().map((item, i) =>
                            <MarketItem key={item.name} item={item} index={i} withBorder={!standalone}/>
                        )
                        :
                        <Spring>
                            <div className={styles.message}>Aún no has añadido monedas favoritos</div>
                        </Spring>
                }
            </Wrapper>
        </Spring>
    )
}

export default Market