import styled, { css } from "styled-components";

const ModalContainer = styled.div`
  max-width: 48rem;
  min-width: 18rem;
  width: 100%;

  max-height: 420px;
  height: 100%;

  text-align: center;

  margin: 0 auto;

  padding-block: 3.75rem;

  border-radius: 1.25rem;

  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.125rem;
    font-weight: 600;
    color: ${(props) => props.theme.dark};
    text-transform: uppercase;

    margin-top: 2.5rem;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => props.theme.gray};

    margin-top: 1.375rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 3.125rem;

  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const ButtonDefaultStyle = css`
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;

  padding: 1rem;

  border-radius: 0.5rem;

  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);

`;

const ButtonAddNew = styled.a`
  ${ButtonDefaultStyle}
  color: ${(props) => props.theme.white};

  background-color: ${(props) => props.theme.darkBlue};

  transition: all 0.2s ease-in-out;
  &:hover {
    filter: brightness(1.75);
  }
`;

const ButtonReturn = styled.a`
  ${ButtonDefaultStyle}

  color: ${(props) => props.theme.darkBlue};

  background-color: transparent;

  transition: all 0.2s ease-in-out;
  &:hover {
    filter: brightness(1.75);
  }
`;

export { ModalContainer, ButtonContainer, ButtonAddNew, ButtonReturn };
