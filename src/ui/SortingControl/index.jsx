// styling
import styles from './style.module.scss';

// utils
import PropTypes from 'prop-types';
import {memo} from 'react';

const SortingControl = ({ label, sorting, setSorting, active }) => {
    return (
        <button className="d-inline-flex align-items-center g-4 text-10 text-600" onClick={setSorting}>
            {label}
            <span className="d-flex flex-column g-2">
                <i className={`${styles.icon} icon-caret-up ${sorting === 'asc' && active ? styles.active : ''}`}/>
                <i className={`${styles.icon} icon-caret-down ${sorting === 'desc' && active ? styles.active : ''}`}/>
            </span>
        </button>
    )
}

SortingControl.propTypes = {
    label: PropTypes.string.isRequired,
    sorting: PropTypes.string.isRequired,
    setSorting: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
}

export default memo(SortingControl);