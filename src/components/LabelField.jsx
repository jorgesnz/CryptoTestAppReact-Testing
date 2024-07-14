// utils
import PropTypes from 'prop-types';

const LabelField = ({ id, label, placeholder, customInput, ...props }) => {
    return (
        <div className="field-wrapper">
            <label className="field-label" htmlFor={id}>{label}</label>
            {
                customInput ?
                    customInput : <input className="field-input" id={id} placeholder={placeholder} {...props} />
            }
        </div>
    )
}

LabelField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    customInput: PropTypes.element,
}

export default LabelField