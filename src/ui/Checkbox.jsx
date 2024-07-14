// styling
import styled from 'styled-components';
import theme from 'styled-theming';

// utils
import PropTypes from 'prop-types';
import {memo} from 'react';

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--label);

  .wrapper {
    input {
      display: none;
    }

    label {
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 4px;
      border: 1px solid ${theme('theme', {
        light: 'var(--text-dark)',
        dark: 'var(--border-dark)'
      })};
      position: relative;

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: 10px;
        height: 10px;
        background: ${theme('theme', {
            light: 'var(--body-dark)',
            dark: 'var(--accent)'
        })};
        border-radius: 2px;
        will-change: transform;
        transition: transform var(--transition);
      }
    }

    input:checked + label:after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const Checkbox = ({id, label, checked, onChange}) => {
    return (
        <StyledCheckbox>
            <div className="wrapper">
                <input type="checkbox" id={id} checked={checked} onChange={onChange}/>
                <label htmlFor={id}/>
            </div>
            {label && <label htmlFor={id}>{label}</label>}
        </StyledCheckbox>
    )
}

Checkbox.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
}

export default memo(Checkbox);