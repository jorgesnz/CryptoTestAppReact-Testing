// styled components
import {Currency, ChartWrapper, ScrollContainer} from './style';

// hooks
import {useState} from 'react';
import useDraggableScrollContainer from '@hooks/useDraggableScrollContainer';

// utils
import {lazy} from 'react';

// constants
import {CRYPTO_CURRENCIES} from '@constants/currencies';

// assets
import iconLight from '@assets/icons/icon-trade-light.svg';
import iconDark from '@assets/icons/icon-trade-dark.svg';

// data placeholder
import chart from '@db/chart';

// components
import {Suspense} from 'react';
import Spring from '@components/Spring';
import WidgetHeader from '@components/WidgetHeader';
import ChartHeader from '@components/ChartHeader';
const MixedChart = lazy(() => import('@components/MixedChart'));
const LineChart = lazy(() => import('@components/LineChart'));

const Trade = () => {
    const {containerRef, isDragging} = useDraggableScrollContainer();
    const [selectedCurrency, setSelectedCurrency] = useState(CRYPTO_CURRENCIES[0].value);
    const [selectedChart, setSelectedChart] = useState('line');
    const [selectedPeriod, setSelectedPeriod] = useState('m15');
    const currentData = chart.find(item => item.id === selectedCurrency);

    return (
        <Spring type="fade">
            <div className="widget_container">
                <WidgetHeader iconLight={iconLight} iconDark={iconDark} title="Trade"/>
                <div className="widget_body card g-0">
                    <ScrollContainer className={`scroll-container ${isDragging ? 'isDragging' : ''}`}
                                     ref={containerRef}>
                        {
                            CRYPTO_CURRENCIES.map((currency => (
                                <Currency className={selectedCurrency === currency.value ? 'active' : ''}
                                          onClick={() => setSelectedCurrency(currency.value)}
                                          key={currency.value}>
                                    <div className="icon bordered">
                                        <img src={currency.icon} alt={currency.label}/>
                                    </div>
                                    <span className="title h4">{currency.label}</span>
                                </Currency>
                            )))
                        }
                    </ScrollContainer>
                    <div className="d-flex flex-column">
                        <ChartHeader data={currentData}
                                     period={selectedPeriod}
                                     setPeriod={setSelectedPeriod}
                                     type={selectedChart}
                                     setType={setSelectedChart}/>
                        <Suspense fallback={<div className="suspense-text">Cargando...</div>}>
                            <ChartWrapper>
                                {
                                    selectedChart === 'mixed' ?
                                        <MixedChart period={selectedPeriod}/>
                                        :
                                        <LineChart period={selectedPeriod}/>
                                }
                            </ChartWrapper>
                        </Suspense>
                    </div>
                </div>
            </div>
        </Spring>
    )
}

export default Trade