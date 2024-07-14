// components
import QRModal from '@components/QRModal';

// hooks
import {useModal} from '@contexts/modalContext';

// assets
import qr from '@assets/qr-code-sm.svg';

const QRField = ({id, value, onChange, placeholder = 'Ingrese o mantenga presionado para pegar la dirección', ...props}) => {
    const {open, modal, handleOpen, handleClose} = useModal();

    return (
        <>
            <div className="field-input field-input--qr">
                <input type={props.type ? props.type : 'text'}
                       className="text-overflow"
                       value={value}
                       id={id}
                       onChange={onChange}
                       placeholder={placeholder}/>
                <button className="qr-code" onClick={() => handleOpen('qr')}>
                    <img src={qr} alt="QR Code"/>
                </button>
            </div>
            <QRModal open={open && modal === 'qr'} handleClose={handleClose}/>
        </>
    )
}

export default QRField