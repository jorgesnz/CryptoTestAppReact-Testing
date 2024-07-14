import styled from 'styled-components/macro';
import theme from 'styled-theming';

const Labels = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.625rem;

  @media screen and (min-width: 414px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const List = styled.div`
  display: grid;
  gap: 8px;

  @media screen and (min-width: 414px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PlanPicker = styled.div`
  transition: all var(--transition);

  input[type='radio'] {
    display: none;
  }

  label {
    padding: 16px;

    .title {
      transition: color var(--transition);
    }
  }
  
  .rate {
    @media screen and (min-width: 414px) {
      display: block;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }

    @media screen and (min-width: 1024px) {
      display: block;
    }

    @media screen and (min-width: 1440px) {
      display: none;
    }

    @media screen and (min-width: 1700px) {
      display: block;
    }
  }

  &.active,
  &:hover, &:focus {
    ${theme('theme', {
      light: `
            background-color: var(--header-light);
            
            .title {
                color: #fff;
            }
        `,
      dark: `
            border-color: var(--accent);
        `,
    })};
  }
`;

export {PlanPicker, List, Labels}