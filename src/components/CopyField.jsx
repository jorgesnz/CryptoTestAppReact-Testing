// components
import {toast} from 'react-toastify';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';
import {truncateMiddle} from '@utils/helpers';
import classNames from 'classnames';

const CopyField = ({label, value, masked = false}) => {
    const {theme} = useThemeProvider();
    const copyToClipboard = () => {
        navigator.clipboard.writeText(value);
        toast.success('Copied to clipboard');
    }

    return (
        <div className="field-input field-input--copy d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column" style={{maxWidth: 'calc(100% - 80px)'}}>
                <span className="text-8 text-600">{label}</span>
                <span className="text-overflow text-header">{masked ? truncateMiddle(value) : value}</span>
            </div>
            <button className={classNames('btn btn--pill', {'btn--invert' : theme === 'light'})}
                    onClick={copyToClipboard}>
                Copy
            </button>
        </div>
    )
}

CopyField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    masked: PropTypes.bool
}

export default CopyField