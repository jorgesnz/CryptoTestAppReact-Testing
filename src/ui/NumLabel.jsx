// styling
import styled from 'styled-components/macro';

// utils
import PropTypes from 'prop-types';
import {memo} from 'react';

const StyledNumLabel = styled.span`
  height: 24px;
  width: 58px;
  border-radius: ${props => props['variant'] === 'brick' ? '4px' : '8px'};
  background: ${props => props['isPositive'] ? 'var(--green)' : 'var(--red)'};
  padding: ${props => props['variant'] === 'brick' ? '0 8px' : '0 12px'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--widget-light);
`;

const NumLabel = ({value, variant = 'brick', ...props}) => {
    return (
        <StyledNumLabel isPositive={value > 0} variant={variant} {...props}>
            {value.toFixed(2)}%
        </StyledNumLabel>
    )
}

NumLabel.propTypes = {
    value: PropTypes.number.isRequired,
    variant: PropTypes.oneOf(['pill', 'brick']),
}

export default memo(NumLabel);