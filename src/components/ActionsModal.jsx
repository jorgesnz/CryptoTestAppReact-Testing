// components
import ModalContainer from '@components/ModalContainer';
import LabelField from '@components/LabelField';
import {PatternFormat} from 'react-number-format';

// hooks
import {useModal} from '@contexts/modalContext';

// assets
import icon from '@assets/icons/scan.svg';

const ActionsModal = () => {
    const {open, modal, handleClose} = useModal();

    return (
        <ModalContainer open={open && modal === 'payment'} handleClose={handleClose}>
            <div className="widget_body modal card d-flex flex-column" style={{gap: 40}}>
                <div className="d-flex flex-column g-8">
                    <div>
                        <h2 className="text-large">Comprar Cripto</h2>
                        <div className="d-flex align-items-center justify-content-between g-24" style={{margin: '8px 0 16px'}}>
                            <h2 className="text-overflow">EUR Visa/Mastercard</h2>
                            <button>
                                <img src={icon} alt="icon"/>
                            </button>
                        </div>
                    </div>
                    <div className="d-flex flex-column g-16">
                        <LabelField id="card-number" label="Número en la tarjeta" customInput={
                            <PatternFormat id="card-number"
                                           format="#### #### #### ####"
                                           mask="_"
                                           placeholder="0000 0000 0000 0000"
                                           className="field-input"/>
                        }/>
                        <div className="d-grid col-2 g-16">
                            <LabelField id="card-expiration" label="Expiración" customInput={
                                <PatternFormat id="card-expiration"
                                                  format="##/##"
                                                    mask="_"
                                                    placeholder="MM/YY"
                                                    className="field-input"/>
                            }/>
                            <LabelField id="card-cvv" label="CVV" customInput={
                                <PatternFormat id="card-cvv"
                                                  format="###"
                                                    mask="_"
                                                    placeholder="000"
                                                    className="field-input"/>
                            }/>
                        </div>
                    </div>
                </div>
                <button className="btn" onClick={handleClose}>
                    Continuar
                </button>
            </div>
        </ModalContainer>
    )
}

export default ActionsModal