import styled from 'styled-components';
import theme from 'styled-theming'

const LeaderBoardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LeaderBoardItem = styled.div`
  padding: 24px 16px;
  display: flex;
  align-items: center;

  &.top {
    background: ${theme('theme', {
      light: 'var(--header-light)',
      dark: 'var(--accent)'
    })};
    color: var(--header-light);

    .title {
      color: ${theme('theme', {
        light: '#fff',
        dark: 'var(--header-light)'
      })};
    }

    .label {
      color: ${theme('theme', {
        light: '#E8E8E8',
        dark: 'var(--header-light)'
      })};
    }

    .num {
      background: ${theme('theme', {
        light: 'var(--accent)',
        dark: 'var(--header-light)'
      })};
      color: ${theme('theme', {
        light: 'var(--header-light)',
        dark: 'var(--body-light)'
      })};
    }
  }

  .num {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--accent);
    margin-right: 8px;
    font-size: 10px;
    font-weight: 700;
    color: var(--header-light);
  }

  .label {
    display: none;
  }

  @media screen and (min-width: 375px) {
    .label {
      display: block;
    }
  }
`;

export {LeaderBoardItem, LeaderBoardList}