// styling
import styles from './style.module.scss';

// utils
import PropTypes from 'prop-types';
import {memo} from 'react';

const Search = ({placeholder, className, id, value, onChange}) => {
    const handleChange = (e) => onChange(e.target.value);

    const handleClear = () => onChange('');

    return (
        <div className={`${styles.container} card ${className || ''}`}>
            <label htmlFor={id}>
                <i className="icon-search"></i>
            </label>
            <input id={id}
                   type="search"
                   className="flex-1"
                   placeholder={placeholder}
                   value={value}
                   onChange={handleChange}
            />
            <i className={`${styles.reset} ${value === '' ? '' : styles.active} icon-xmark`} onClick={handleClear} />
        </div>
    );
}

Search.propTypes = {
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    id: PropTypes.string.isRequired
}

export default memo(Search);