// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// utils
import PropTypes from 'prop-types';
import {memo} from 'react';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  line-height: 1;
  height: 24px;
  padding: 0 8px;
  border-radius: 8px;
  font-size: 0.625rem;
  color: var(--text-light);
  transition: all var(--transition);
  font-weight: 600;
  ${theme('theme', {
    light: `
        background-color: #fff;
        border: 1px solid var(--border-light);
        
        &:hover, &:focus,
        &.active {
            background-color: var(--header-light);
            color: #fff;
        }
    `,
    dark: `
        background-color: var(--header-light);
        border: 1px solid transparent;
        
        &:hover, &:focus,
        &.active {
            background-color: var(--accent);
            color: var(--header-light);
        }
    `
  })};

  .icon {
    font-size: 4px;
    margin-top: 2px;
  }
`;

const PeriodButton = ({value, text, selected, onClick}) => {
    return (
        <Button className={value === selected ? 'active' : ''} onClick={() => onClick(value)}>
            {text}
        </Button>
    )
}

PeriodButton.propTypes = {
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default memo(PeriodButton);