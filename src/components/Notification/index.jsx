import React from 'react';
import PropTypes from 'prop-types';

// styling
import styles from './style.module.scss';

const Notification = ({ data, index }) => {
    return (
        <div className={`${styles.notification} ${data.read ? styles.read : styles.unread}`} key={index}>
            <h4 className={styles.title}>{data.title}</h4>
            <p className={styles.text}>{data.text}</p>
            <span className={styles.date}>{new Date(data.date).toLocaleString()}</span>
        </div>
    );
};

Notification.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired
};

export default Notification;
