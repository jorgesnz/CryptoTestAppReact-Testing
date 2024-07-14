// styles
import styles from './style.module.scss';

// hooks
import {useModal} from '@contexts/modalContext';
import {useState} from 'react';

// utils
import PropTypes from 'prop-types';
import {lazy} from 'react';

// assets
import iconLight from '@assets/icons/icon-buy-light.svg';
import iconDark from '@assets/icons/icon-buy-dark.svg';

// components
import {Suspense} from 'react';
import WidgetHeader from '@components/WidgetHeader';
import Spring from '@components/Spring';
import ChartHeader from '@components/ChartHeader';
import MixedChart from '@components/MixedChart';
import LineChart from '@components/LineChart';
const Exchange = lazy(() => import('@widgets/Exchange'));
const Market = lazy(() => import('@widgets/Market'));

const BuyCrypto = ({variant}) => {
    const [selectedPeriod, setSelectedPeriod] = useState('m15');
    const [selectedChart, setSelectedChart] = useState('mixed');
    const {handleOpen} = useModal();
    const chartHeight = variant === 'form' ? 240 : 210;

    const data = {
        label: 'BTCUSDT',
        price: 56548.00,
        change: 1.76,
        high: 59391.00,
        low: 53439.40,
    }

    return (
        <Spring className="widget">
            {
                variant === 'form' &&
                <WidgetHeader title="Comprar Cripto" iconLight={iconLight} iconDark={iconDark}/>
            }
            <div className={`${styles.container} widget_body card`}>
                <div className="d-flex flex-column">
                    <ChartHeader data={data}
                                 period={selectedPeriod}
                                 setPeriod={setSelectedPeriod}
                                 type={selectedChart}
                                 setType={setSelectedChart}/>
                    <div className="d-flex flex-column g-16">
                        <div className={styles.chart} style={{height: chartHeight}}>
                            {
                                selectedChart === 'mixed' ?
                                    <MixedChart period={selectedPeriod} withButtons={variant === 'overview'}/>
                                    :
                                    <LineChart period={selectedPeriod} withButtons={variant === 'overview'}/>
                            }
                        </div>
                        <Suspense fallback={<div className="suspense-text">Cargando...</div>}>
                            {
                                variant === 'overview' &&
                                <div className="d-grid col-2 g-16">
                                    <button className="btn btn--invert" onClick={() => handleOpen('payment')}>
                                        Vender
                                    </button>
                                    <button className="btn" onClick={() => handleOpen('payment')}>Comprar</button>
                                </div>
                            }
                        </Suspense>
                    </div>
                </div>
                <span className={styles.container_divider}/>
                <div>
                    {
                        variant === 'overview' ? <Market standalone={false}/> : <Exchange standalone={false}/>
                    }
                </div>
            </div>
        </Spring>
    )
}

BuyCrypto.propTypes = {
    variant: PropTypes.oneOf(['overview', 'form']).isRequired,
}

export default BuyCrypto