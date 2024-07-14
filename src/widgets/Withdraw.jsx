// components
import WidgetHeader from '@components/WidgetHeader';
import LabelField from '@components/LabelField';
import QRField from '@components/QRField';
import OperationTotal from '@components/OperationTotal';
import StyledSelect from '@ui/StyledSelect';
import Spring from '@components/Spring';
import FooterText from '@components/FooterText';

// hooks
import {useState} from 'react';
import {useThemeProvider} from '@contexts/themeContext';
import {useModal} from '@contexts/modalContext';

// constants
import {CRYPTO_CURRENCIES} from '@constants/currencies';

// assets
import iconLight from '@assets/icons/icon-wallet-light.svg';
import iconDark from '@assets/icons/icon-wallet-dark.svg';
import CurrencyLabel from '@ui/CurrencyLabel';

const Withdraw = () => {
    const {theme} = useThemeProvider();
    const {handleOpen} = useModal();
    const [currency, setCurrency] = useState({
        value: CRYPTO_CURRENCIES[0].value,
        label: <CurrencyLabel icon={CRYPTO_CURRENCIES[0].icon} label={CRYPTO_CURRENCIES[0].label}/>,
        name: CRYPTO_CURRENCIES[0].label,
    });

    return (
        <Spring className="widget">
            <WidgetHeader title="Retirar" iconLight={iconLight} iconDark={iconDark} />
            <div className="widget_body card">
                <div className="d-flex flex-column g-16">
                    <LabelField id="withdraw-address" label="Dirección" customInput={<QRField id="address" />} />
                    <div className="field-group">
                        <LabelField id="withdraw-amount" label="Cantidad" placeholder="Cantidad mínima: 0.001" />
                        <StyledSelect value={currency}
                                      onChange={setCurrency}
                                      options={CRYPTO_CURRENCIES}
                                      variant="currency" />
                    </div>
                </div>
                <div className="d-flex flex-column g-8">
                    <OperationTotal fee={1.2} currency={currency.name} />
                    <FooterText/>
                </div>
                <button className={`btn ${theme === 'light' ? 'btn--invert' : ''}`} onClick={() => handleOpen('payment')}>
                    Retirar
                </button>
            </div>
        </Spring>
    );
}

export default Withdraw