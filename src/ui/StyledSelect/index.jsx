// styled components
import {BasicSelect, CurrencySelect, MinimalSelect} from './style';

// components
import CurrencyLabel from '@ui/CurrencyLabel';

// hooks
import {useState} from 'react';

// utils
import PropTypes from 'prop-types';
import {components} from 'react-select';
import {memo} from 'react';

const StyledSelect = ({options, value, onChange, variant = 'basic', ...props}) => {
    const [uniqueId] = useState(
        () => 'select_' + Math.random().toFixed(5).slice(2),
    );

    // custom dropdown indicator
    const Control = ({children, ...props}) => {
        return (
            <components.Control className={variant === 'basic' ? 'field-input' : ''} {...props}>
                {children}
                {
                    variant === 'minimal' ?
                        <i className="icon icon-caret-down"/>
                        :
                        <i className="icon icon-chevron-down"/>
                }
            </components.Control>
        );
    }

    const currencyOptions = options.map((option) => ({
        value: option.value,
        label: <CurrencyLabel icon={option.icon} label={option.label}/>,
        name: option.label,
    }));

    // select props
    const selectProps = {
        classNamePrefix: 'select',
        id: props.id || uniqueId,
        isSearchable: false,
        options: variant === 'currency' ? currencyOptions : options,
        value,
        onChange,
        openMenuOnFocus: true,
        blurInputOnSelect: true,
        onMenuClose: () => {
            const menuEl = document.querySelector(`#${props.id || uniqueId } .select__menu`);
            const containerEl = menuEl?.parentElement;
            const clonedMenuEl = menuEl?.cloneNode(true);

            if (!clonedMenuEl) return;

            clonedMenuEl.classList.add('close');
            clonedMenuEl.addEventListener('animationend', () => {
                containerEl?.removeChild(clonedMenuEl);
            });

            containerEl?.appendChild(clonedMenuEl);
        },
        components: {
            Control,
        },
    };

    const renderSelect = () => {
        switch (variant) {
            case 'currency':
                return <CurrencySelect {...selectProps} />;
            case 'minimal':
                return <MinimalSelect {...selectProps} />;
            default:
                return <BasicSelect {...selectProps} />;
        }
    }

    return renderSelect();
}

StyledSelect.propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['basic', 'currency', 'minimal']),
}

export default memo(StyledSelect);