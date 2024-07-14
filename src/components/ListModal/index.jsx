// styling
import styles from './style.module.scss';

// components
import ModalContainer from '@components/ModalContainer';
import LabelField from '@components/LabelField';
import StyledSelect from '@ui/StyledSelect';
import CurrencyLabel from '@ui/CurrencyLabel';
import CollapsedText from '@components/CollapsedText';

// hooks
import {useModal} from '@contexts/modalContext';
import {useState} from 'react';
import {useThemeProvider} from '@contexts/themeContext';
import useMeasure from 'react-use-measure';

// constants
import {CRYPTO_CURRENCIES} from '@constants/currencies';

// data placeholder
import item from '@db/item';

const ListModal = () => {
    const {theme} = useThemeProvider();
    const [currency, setCurrency] = useState({
        value: CRYPTO_CURRENCIES[0].value,
        label: <CurrencyLabel icon={CRYPTO_CURRENCIES[5].icon} label={CRYPTO_CURRENCIES[5].label}/>,
        name: CRYPTO_CURRENCIES[5].label,
    });
    const {open, modal, handleOpen, handleClose} = useModal();
    const [ref, {width}] = useMeasure();

    const handleSubmit = () => {
        handleClose();
        handleOpen('nft-pay');
    }

    return (
        <ModalContainer open={open && modal === 'list'} handleClose={handleClose}>
            <div className="card widget_body scroll-y">
                <h2 className="text-large">Listing Details</h2>
                <div className="d-flex flex-column g-16">
                    <div className={styles.main}>
                        <img className="border-12" src={item.image} alt={item.name}/>
                        <div className={styles.main_details} ref={ref}>
                            <span className="text-green text-600">{item.author}</span>
                            <h2 className={`${styles.title} text-overflow`}>{item.name}</h2>
                            <CollapsedText text={item.description} width={width}/>
                        </div>
                    </div>
                    <div className="d-flex flex-column g-4 card bordered p-16">
                        <div className="d-flex justify-content-between">
                            <span className={styles.property}>Dirección de Contrato</span>
                            <span className={`${styles.value} text-overflow text-header`}>{item.info.address}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className={styles.property}>Token ID</span>
                            <span className={`${styles.value} text-overflow text-header`}>{item.info.token}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className={styles.property}>Blockchain</span>
                            <span className={`${styles.value} text-overflow text-header`}>{item.info.blockchain}</span>
                        </div>
                    </div>
                    <div className="modal-element modal-element--lg bordered">
                        <span className={theme === 'light' ? '' : 'text-dark'}>Metodos de pago</span>
                        <span className={`modal-element_wrapper ${theme === 'light' ? 'text-light' : ''}`}>
                            Fixed Price <i className="icon icon-chevron-right"/>
                        </span>
                    </div>
                    <div className="modal-element modal-element--lg bordered">
                        <span className={theme === 'light' ? '' : 'text-dark'}>Delisting Time</span>
                        <span className={`modal-element_wrapper ${theme === 'light' ? 'text-light' : ''}`}>
                            <span className="d-inline-flex g-8">
                                <span>2022-11-12</span>
                                <span>10:34:18</span>
                            </span>
                            <i className="icon icon-chevron-right"/>
                        </span>
                    </div>
                    <div className="field-group">
                        <LabelField label="Price" id="price" placeholder="0.00" defaultValue={item.price}/>
                        <StyledSelect options={CRYPTO_CURRENCIES} value={currency} onChange={setCurrency} variant="currency"/>
                    </div>
                </div>
                <div className="d-flex flex-column g-24">
                    <p className="text-600">
                        Justo donec enim diam vulputate ut pharetra. Ut placerat orci nulla pellen.
                    </p>
                    <button className="btn" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </ModalContainer>
    )
}

export default ListModal