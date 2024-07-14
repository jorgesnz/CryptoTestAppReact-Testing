// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// utils
import {lazy, memo} from 'react';

// components
const Slider = lazy(() => import('@mui/material/Slider'));

const StyledSlider = styled(Slider)`
  width: 90px !important;
  padding: 16px 0 !important;
  color: ${theme('theme', {
    light: 'var(--header-light) !important',
    dark: 'var(--accent) !important',
  })};

  .MuiSlider-thumb {
    height: 12px;
    width: 12px;
    border-radius: 2px;
    box-shadow: none !important;
    
    &:before, &:after {
        display: none;
    }
  }

  .MuiSlider-track,
  .MuiSlider-rail {
    height: 2px;
  }
  
  .MuiSlider-rail {
    background-color: ${theme('theme', {
        light: '#E8E8E8 !important',
        dark: 'var(--border) !important',
    })};
    opacity: 1;
  }
`;

const RangeSlider = ({value, onChange, step, min, max}) => {
    return (
        <StyledSlider
            value={value}
            onChange={onChange}
            step={step}
            min={min}
            max={max}
        />
    );
}

export default memo(RangeSlider);