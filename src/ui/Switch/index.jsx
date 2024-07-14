// styling
import styles from './style.module.scss'

// utils
import PropTypes from 'prop-types';
import {memo} from 'react';

const Switch = ({checked, onChange, id}) => {
    return (
        <div className={styles.switch}>
            <input id={id} type="checkbox" checked={checked} onChange={onChange} />
            <label className={styles.switch_slider} htmlFor={id} />
        </div>
    )
}

Switch.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
}

export default memo(Switch);