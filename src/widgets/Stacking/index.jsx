// styled components
import {PlanPicker, List, Labels} from './style';

// components
import WidgetHeader from '@components/WidgetHeader';
import LabelField from '@components/LabelField';
import StyledSelect from '@ui/StyledSelect';
import Spring from '@components/Spring';

// hooks
import {useState} from 'react';
import {useModal} from '@contexts/modalContext';

// constants
import {CRYPTO_CURRENCIES} from '@constants/currencies';

// assets
import iconLight from '@assets/icons/icon-stacking-light.svg';
import iconDark from '@assets/icons/icon-stacking-dark.svg';
import CurrencyLabel from '@ui/CurrencyLabel';

const Stacking = () => {
    const [currency, setCurrency] = useState({
        value: CRYPTO_CURRENCIES[0].value,
        label: <CurrencyLabel icon={CRYPTO_CURRENCIES[0].icon} label={CRYPTO_CURRENCIES[0].label}/>,
        name: CRYPTO_CURRENCIES[0].label,
    });
    const [plan, setPlan] = useState({days: 0, interest: 0});
    const {handleOpen} = useModal();

    const plans = [
        {days: 30, interest: 1.7},
        {days: 90, interest: 6.0},
        {days: 180, interest: 13.0},
        {days: 365, interest: 30.0},
    ];

    return (
        <Spring className="widget">
            <WidgetHeader title="Stacking" iconLight={iconLight} iconDark={iconDark}/>
            <div className="widget_body card">
                <div className="d-flex flex-column g-8">
                    <div className="field-group">
                        <LabelField label="Monto" type="number" id="amount" placeholder="50"/>
                        <StyledSelect onChange={setCurrency} options={CRYPTO_CURRENCIES} value={currency} variant="currency" />
                    </div>
                    <Labels>
                        <span>Min. monto: 50 {currency.name}</span>
                        <span>Max. monto: 600000 {currency.name}</span>
                    </Labels>
                </div>
                <div className="d-flex flex-column g-8">
                    <h3>Elige plan:</h3>
                    <List>
                        {
                            plans.map((item, index) => (
                                <PlanPicker className={`${plan.days === item.days ? 'active' : ''} bordered`} key={index}>
                                    <input type="radio"
                                           id={`plan-${index}`}
                                           name="plan"
                                           value={item.days}
                                           onChange={() => setPlan({days: item.days, interest: item.interest})}/>
                                    <label className="d-flex align-items-center justify-content-between"
                                           htmlFor={`plan-${index}`}>
                                            <span className="d-inline-flex align-items-center g-4 lh-1 text-10">
                                                <span className="title h2">{item.days}</span>
                                                <span className="days">Días</span>
                                            </span>
                                        <span className="d-inline-flex align-items-center g-4 lh-1 text-10">
                                            <span className="h2 text-green">{item.interest}%</span>
                                                <span className="rate">Ratio</span>
                                            </span>
                                    </label>
                                </PlanPicker>
                            ))
                        }
                    </List>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <span>Monto Recibido:</span>
                    <span className="text-green text-600">+0 {currency.name}</span>
                </div>
                <button className="btn" onClick={() => handleOpen('payment')} style={{marginTop: 8}}>
                    Stack
                </button>
            </div>
        </Spring>
    )
}

export default Stacking