import {createGlobalStyle} from 'styled-components';
import theme from 'styled-theming'

const borderColor = theme('theme', {
    light: 'var(--border-light)',
    dark: 'var(--border-dark)'
});

export default createGlobalStyle`
  :root {
    --widget: ${theme('theme', {
      light: 'var(--widget-light)',
      dark: 'var(--widget-dark)'
    })};
    --widget-border: ${theme('theme', {
      light: 'var(--border-light)',
      dark: 'transparent'
    })};
    --body: ${theme('theme', {
      light: 'var(--body-light)',
      dark: 'var(--header-light)'
    })};
    --card-dark: ${theme('theme', {
      light: 'var(--header-light)',
      dark: 'var(--widget-dark)'
    })};
    --header: ${theme('theme', {
      light: 'var(--header-light)',
      dark: 'var(--widget-light)'
    })};
    --text: ${theme('theme', {
      light: 'var(--text-light)',
      dark: 'var(--text-dark)'
    })};
    --border: ${theme('theme', {
      light: 'var(--border-light)',
      dark: 'var(--border-dark)'
    })};
    --card-border: ${theme('theme', {
      light: 'var(--border-light)',
      dark: 'transparent'
    })};
    --symbol: ${theme('theme', {
      light: '#000',
      dark: 'var(--widget-light)'
    })};
    --bullet: ${theme('theme', {
      light: '#E8E8E8',
      dark: 'var(--text-light)'
    })};
    --bullet-active: ${theme('theme', {
      light: 'var(--header-light)',
      dark: 'var(--accent)'
    })};
    --switch: ${theme('theme', {
      light: '#EBEBEB',
      dark: 'var(--border-dark)'
    })};
    --menu: ${theme('theme', {
      light: 'var(--header-light)',
      dark: 'var(--accent)'
    })};
  }

  .text-header,
  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    color: ${theme('theme', {
      light: 'var(--header-light)',
      dark: 'var(--header-dark)'
    })};
  }

  .border-bottom:not(:last-child) {
    border-bottom: 1px solid ${borderColor};
  }

  .qr-code {
    filter: ${theme('theme', {
      light: 'invert(1)',
      dark: 'invert(0)'
    })};
  }

  .crypto-icon {
    width: 40px;
    height: 40px;
    border: ${theme('theme', {
      light: '1px solid var(--border-light)',
      dark: '1px solid var(--border-dark)'
    })};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    img {
      max-height: 25px;
      width: auto;
    }

    &--alt {
      border: ${theme('theme', {
        light: '1px solid transparent',
        dark: '1px solid var(--border-dark)'
      })};
      background-color: ${theme('theme', {
        light: '#f7f7f7',
        dark: 'var(--widget-dark)'
      })};
    }
  }

  .bordered {
    border-radius: 12px;
    border: 1px solid ${theme('theme', {
      light: 'var(--border-light)',
      dark: 'var(--border-dark)'
    })};
    transition: border-color var(--transition);

    &--hover:hover {
      border-color: var(--accent);
    }
  }

  .MuiBackdrop-root {
    background-color: ${theme('theme', {
      light: 'rgba(#171717, 0.6) !important',
      dark: 'rgba(#171717, 0.7) !important'
    })};

    @media screen and (min-width: 768px) {
      &.backdrop-sidebar {
        width: calc(100% - 310px);
        margin-left: auto;
      }
    }
  }

  .symbol {
    color: ${theme('theme', {
      light: '#000',
      dark: 'var(--widget-light)'
    })};
  }
`;