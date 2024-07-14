import styled, {keyframes} from 'styled-components/macro';
import theme from 'styled-theming';
import Select from 'react-select';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NormalizedSelect = styled(Select)`
  .select {
    &__control {
      cursor: pointer;
      transition: var(--transition);
      border: none;
      min-height: unset;
      border-radius: 12px;
      box-shadow: none;

      &--is-focused, &:hover {
        outline: none;
      }

      &--is-focused .icon {
        transform: rotate(180deg);
      }

      .icon {
        transition: .3s ease-in-out;
      }
    }

    &__menu {
      min-width: max-content;
      width: 100%;
      border-radius: 12px;
      z-index: 100;
      animation: ${fadeIn} var(--transition);

      &.close {
        animation: ${fadeIn} var(--transition) reverse;
      }

      &-list {
        max-height: 160px;
        overflow-y: auto;
        scroll-behavior: smooth;
        z-index: 100;
      }
    }

    &__option {
      cursor: pointer;
      transition: var(--transition);

      &:hover,
      &--is-focused,
      &--is-selected {
        background: transparent;
        color: var(--header);
      }
    }

    &__indicator, &__indicator-separator {
      display: none;
    }

    &__value-container {
      padding: 0;
    }
`;

export const MinimalSelect = styled(NormalizedSelect)`
  .select {
    &__control {
      background-color: transparent;

      .icon {
        color: var(--text-dark);
        font-size: 4px;
      }
    }
    
    &__single-value {
      color: var(--text-dark);
      font-weight: 600;
    }

    &__menu {
      border: 1px solid var(--border);
      background: var(--widget);
    }
  }
`;

export const BasicSelect = styled(NormalizedSelect)`
  .select {
    &__control {
      background-color: transparent;
      border: 1px solid var(--border);
      padding: 0 16px;

      &--is-focused, &:hover {
        border-color: var(--accent);

        .icon {
          color: var(--accent);
        }
      }
    }

    &__single-value {
      color: var(--header);
      font-weight: 600;
      line-height: 1;
    }

    &__menu {
      border: 1px solid var(--border);
      background: var(--widget);
    }
  }
`;

export const CurrencySelect = styled(NormalizedSelect)`
  width: 96px;

  .select {
    &__control {
      height: var(--element-height);
      padding: 0 8px;
    }

    &__control, &__menu {
      background-color: ${theme('theme', {
        light: 'var(--border-light)',
        dark: 'var(--body-dark)',
      })};
    }
  }
`;