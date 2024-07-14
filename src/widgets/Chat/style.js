import styled from 'styled-components/macro';
import theme from 'styled-theming';

const DateLabel = styled.div`
  font-size: 10px;
  font-weight: 600;
  margin-left: 40px;
  color: var(--text-light);
`;

const Message = styled.div`
  margin-left: 40px;

  .container {
    display: flex;
    gap: 16px;
    position: relative;
  }

  .avatar {
    width: 24px;
    height: 24px;
    margin-top: 8px;
    position: absolute;
    left: -40px;
  }

  .content {
    font-weight: 600;
    font-size: 14px;
    padding: 8px 32px 8px 8px;
    border-radius: 12px;
    background-color: ${theme('theme', {
      light: '#F7F7F7',
      dark: 'var(--header-light)',
    })};
    position: relative;
    flex-grow: 1;

    .timestamp {
      position: absolute;
      right: 8px;
      bottom: 8px;
      font-size: 8px;
    }
  }
`;

const Button = styled.button`
  height: 40px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  padding: 0 16px;
  color: var(--header);
  border: 1px solid ${theme('theme', {
    light: 'var(--header)',
    dark: 'var(--border)',
  })};
  transition: all var(--transition);

  &:hover {
    background: var(--accent);
    color: var(--header-light);
    border-color: var(--accent)
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const FormWrapper = styled.div`
    padding: 24px 8px 16px 16px;
`;

export {Message, Button, Form, DateLabel, FormWrapper};