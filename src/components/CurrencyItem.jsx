// utils
import PropTypes from 'prop-types';

const CurrencyItem = ({icon, name, label, withIcon = true}) => {
    return (
        <div className="d-flex align-items-center g-8">
            {
                withIcon &&
                <div className="crypto-icon">
                    <img src={icon} alt={name} />
                </div>
            }
            <div className="d-flex flex-column" style={{width: 90}}>
                <h3 className="text-overflow">{name}</h3>
                <span>{label}</span>
            </div>
        </div>
    )
}

CurrencyItem.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    withIcon: PropTypes.bool
}

export default CurrencyItem