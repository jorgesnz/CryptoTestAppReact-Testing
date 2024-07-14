// styling
import styles from './style.module.scss';

// components
import Star from '@ui/Star';
import NumLabel from '@ui/NumLabel';
import CurrencyItem from '@components/CurrencyItem';
import Spring from '@components/Spring';

// hooks
import {useDispatch} from 'react-redux';
import {useWindowSize} from 'react-use';

// actions
import {toggleFavorite} from '@features/crypto/cryptoSlice';

const MarketItem = ({item, index, withBorder}) => {
    const {width} = useWindowSize();
    const dispatch = useDispatch();
    const {isFavorite, icon, name, label, exchange, change} = item;
    const isCompact = width < 568 || (width >= 1440 && width < 1700) ||( width >= 1920 && width < 2000);
    const withIcon = (width >= 414 && width < 768) || (width >= 1024 && width < 1280) || width >= 1440;
    const itemLabel = isCompact ? exchange.usd.toFixed(2) : label;


    return (
        <Spring type="list" index={index}>
            <div className={`${styles.container} card ${withBorder ? 'bordered' : ''}`}>
                <div className={styles.wrapper}>
                    <Star active={isFavorite} onClick={() => dispatch(toggleFavorite(item))} />
                    <CurrencyItem icon={icon} name={name} label={itemLabel} withIcon={withIcon} />
                </div>
                <div className={styles.group}>
                    {
                        !isCompact &&
                        <div className={styles.group_cell}>
                            <span className="h3">${exchange.usd.toFixed(2)}</span>
                        </div>
                    }
                    <NumLabel value={change} />
                </div>
            </div>
        </Spring>
    )
}

export default MarketItem