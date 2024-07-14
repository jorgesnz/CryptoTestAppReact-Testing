// styling
import styles from './style.module.scss';

// components
import WidgetHeader from '@components/WidgetHeader';
import CopyField from '@components/CopyField';
import LabelField from '@components/LabelField';
import StyledSelect from '@ui/StyledSelect';
import OperationTotal from '@components/OperationTotal';
import Spring from '@components/Spring';
import CurrencyLabel from '@ui/CurrencyLabel';
import FooterText from '@components/FooterText';

// hooks
import {useState} from 'react';
import {useModal} from '@contexts/modalContext';

// utils
import {memo} from 'react';

// assets
import iconLight from '@assets/icons/icon-deposit-light.svg';
import iconDark from '@assets/icons/icon-deposit-dark.svg';
import QR from '@assets/qr-code.svg';

// data placeholder
import {CURRENCIES, MERCHANTS} from '@constants/currencies';

const Deposit = () => {
    const [currency, setCurrency] = useState({
        value: CURRENCIES[0].value,
        label: <CurrencyLabel icon={CURRENCIES[0].icon} label={CURRENCIES[0].label}/>,
        name: CURRENCIES[0].label,
    });
    const [merchant, setMerchant] = useState(MERCHANTS[0]);
    const {handleOpen} = useModal();

    return (
        <Spring className="widget">
            <WidgetHeader title="Depositar" iconLight={iconLight} iconDark={iconDark}/>
            <div className={`${styles.container} ${styles.col2} widget_body card`}>
                <div className="d-flex flex-column g-16">
                    <div className="d-flex flex-column g-16">
                        <div className="field-group">
                            <LabelField id="deposit-amount" label="Cantidad" placeholder="100"/>
                            <StyledSelect value={currency}
                                          onChange={setCurrency}
                                          options={CURRENCIES}
                                          variant="currency"/>
                        </div>
                        <LabelField id="deposit-merchant"
                                    label="Elige un método de pago"
                                    customInput={
                                        <StyledSelect id="deposit-merchant"
                                                      value={merchant}
                                                      onChange={setMerchant}
                                                      options={MERCHANTS}/>
                                    }/>
                    </div>
                    <div className="d-flex flex-column g-8">
                        <OperationTotal currency={currency.name}/>
                        <FooterText/>
                    </div>
                    <button className="btn" onClick={() => handleOpen('payment')}>Continuar</button>
                </div>
                <div className={styles.qr}>
                    <img className={`${styles.qr_code} qr-code`} src={QR} alt="QR code"/>
                    <CopyField label="Dirección" value="bc2w-qkj7-834-jj0h-458h-dwawp-q034" masked/>
                </div>
            </div>
        </Spring>
    )
}

export default memo(Deposit);