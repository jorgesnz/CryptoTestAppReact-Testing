import styled from 'styled-components/macro';
import theme from 'styled-theming';

const ScrollContainer = styled.div`
  display: flex;
  gap: 8px;
  margin: 0 -16px 32px;
  padding: 0 16px;
`;

const Currency = styled.div`
  cursor: pointer;
  min-width: 72px;
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${theme('theme', {
    light: 'var(--widget-light)',
    dark: 'var(--header-light)',
  })};
  border: 1px solid ${theme('theme', {
    light: 'var(--border-light)',
    dark: 'transparent',
  })};
  border-radius: 12px;
  transition: all var(--transition);
  
  &.active {
    background-color: var(--accent);
    
    .title {
      color: var(--header-light);
    }
  }
  
  .icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme('theme', {
        light: '#f7f7f7',
        dark: 'var(--header-light)',
    })};
    
    img {
      height: 24px;
      width: auto;
    }
  }
`;

const ChartWrapper = styled.div`
  height: 380px;
  margin: -10px 0 -10px -18px;
`;

export {Currency, ChartWrapper, ScrollContainer}