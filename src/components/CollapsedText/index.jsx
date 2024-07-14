// styling
import styles from './style.module.scss';

// components
// import Truncate from 'react-truncate';

// hooks
import {useState, useEffect} from 'react';
import {useThemeProvider} from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';
import {lazy} from 'react';

// components
const Truncate = lazy(() => import('react-truncate'));

const CollapsedText = ({text, lines = 2, width, className, withButton = true}) => {
    const {fontScale} = useThemeProvider();
    const [truncated, setTruncated] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [mounted, setMounted] = useState(false);

    const handleExpand = e => {
        e.preventDefault();
        setExpanded(true);
    }

    useEffect(() => {
        setExpanded(false);
    }, [fontScale]);

    useEffect(() => {
        setMounted(true);

        return () => setMounted(false);
    }, []);

    return (
        <div className={className ? className : ''}>
            {
                mounted && (
                    <Truncate
                        lines={!expanded && lines}
                        ellipsis={(
                            <span>... {
                                withButton &&
                                <button className={styles.button} onClick={handleExpand}>more</button>}</span>
                        )}
                        onTruncate={() => setTruncated(!truncated)}
                        width={width}
                    >
                        {text}
                    </Truncate>
                )
            }
        </div>
    )
}

CollapsedText.propTypes = {
    text: PropTypes.string.isRequired,
    lines: PropTypes.number,
    width: PropTypes.number.isRequired,
    className: PropTypes.string,
    withButton: PropTypes.bool
}

export default CollapsedText