// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';

const WidgetHeader = ({title, iconLight, iconDark, innerRef, className}) => {
    const {theme} = useThemeProvider();

    return (
        <div className={`widget_header ${className || ''}`} ref={innerRef}>
            <img className="symbol" src={theme === 'light' ? iconLight : iconDark} alt="icon"/>
            <h2>{title}</h2>
        </div>
    )
}

WidgetHeader.propTypes = {
    title: PropTypes.string.isRequired,
    iconLight: PropTypes.string.isRequired,
    iconDark: PropTypes.string.isRequired,
    innerRef: PropTypes.func,
    className: PropTypes.string
}

export default WidgetHeader