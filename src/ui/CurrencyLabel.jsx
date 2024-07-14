// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// utils
import {memo} from 'react';

const Wrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--header);
  font-weight: 600;

  .icon-wrapper {
    width: 24px;
    height: 24px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${theme('theme', {
      light: `
            background: #F7F7F7;
            border: 1px solid transparent;
        `,
      dark: `
        background: var(--dark-bg);
        border: 1px solid var(--border-dark);
        `
    })};

    img {
      height: 16px;
      width: auto;
    }
  }
`;

const CurrencyLabel = ({icon, label}) => {
    return (
        <Wrapper>
             <span className="icon-wrapper">
                 <img src={icon} alt={label}/>
             </span>
            {label}
        </Wrapper>
    )
}

export default memo(CurrencyLabel);