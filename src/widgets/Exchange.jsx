// components
import WidgetHeader from '@components/WidgetHeader';
import LabelField from '@components/LabelField';
import StyledSelect from '@ui/StyledSelect';
import OperationTotal from '@components/OperationTotal';
import Spring from '@components/Spring';
import FooterText from '@components/FooterText';
import {Fragment} from 'react';

// hooks
import {useState} from 'react';
import {useThemeProvider} from '@contexts/themeContext';
import {useModal} from '@contexts/modalContext';

// constants
import {CRYPTO_CURRENCIES, CURRENCIES} from '@constants/currencies';

// assets
import iconLight from '@assets/icons/icon-exchange-light.svg';
import iconDark from '@assets/icons/icon-exchange-dark.svg';
import CurrencyLabel from '@ui/CurrencyLabel';

const WidgetWrapper = ({children}) => {
    return (
        <Spring className="widget">
            <WidgetHeader title="Exchange" iconLight={iconLight} iconDark={iconDark}/>
            {children}
        </Spring>
    )
}

const Exchange = ({standalone = true}) => {
    const {theme} = useThemeProvider();
    const {handleOpen} = useModal();
    const [fromCurrency, setFromCurrency] = useState({
        value: CURRENCIES[0].value,
        label: <CurrencyLabel icon={CURRENCIES[0].icon} label={CURRENCIES[0].label}/>,
        name: CURRENCIES[0].label,
    });
    const [toCurrency, setToCurrency] = useState({
        value: CRYPTO_CURRENCIES[0].value,
        label: <CurrencyLabel icon={CRYPTO_CURRENCIES[0].icon} label={CRYPTO_CURRENCIES[0].label}/>,
        name: CRYPTO_CURRENCIES[0].label,
    });

    const Container = standalone ? WidgetWrapper : Fragment;

    return (
        <Container>
            <div className={`widget_body card ${!standalone && theme === 'light' ? 'card--no-border' : ''} g-16 ${standalone ? '' : 'p-0'}`}>
                <div className="d-flex flex-column g-16">
                    <div className="field-group">
                        <LabelField id="exchange-from" label="De" placeholder="50"/>
                        <StyledSelect value={fromCurrency}
                                      onChange={setFromCurrency}
                                      options={CURRENCIES}
                                      variant="currency"/>
                    </div>
                    <div className="field-group">
                        <LabelField id="exchange-to" label="Para" placeholder="Recibir"/>
                        <StyledSelect value={toCurrency}
                                      onChange={setToCurrency}
                                      options={CRYPTO_CURRENCIES}
                                      variant="currency"/>
                    </div>
                </div>
                <div className="d-flex flex-column g-8">
                    <OperationTotal currency={toCurrency.name} fee={11.16}/>
                   <FooterText/>
                </div>
                <button className={`btn ${theme === 'light' ? 'btn--invert' : ''}`} onClick={() => handleOpen('payment')}>
                    Convertir
                </button>
            </div>
        </Container>
    )
}

export default Exchange