import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

const scaleIn = keyframes`
0%{
  transform:scale(0)
}
100%{transform:scale(1)}
`;

const ModalBlock = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  overflow: hidden;

  padding: 0.5rem;

  opacity: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(248, 248, 248, 0.75);

  display: block;
`;

const ModalContainer = styled.div`
  z-index: 1;

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
    font-size: clamp(1.5rem, 1.125rem + 2.0833vw, 2.125rem);
    font-weight: 600;
    color: ${(props) => props.theme.dark};
    text-transform: uppercase;

    margin-top: 2.5rem;
  }

  p {
    font-size: clamp(1.125rem, 0.9000rem + 1.2500vw, 1.5rem);
    font-weight: 500;
    color: ${(props) => props.theme.gray};

    margin-top: 1.375rem;
  }

  animation: ${scaleIn} 0.2s ease 0s 1 normal forwards;
`;

const ButtonContainer = styled.div`
  margin-top: 2.625rem;

  padding: 0.5rem;

  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const LinkDefaultStyle = css`
  font-size: clamp(0.875rem, 0.8000rem + 0.4167vw, 1rem);
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;

  padding: 1rem;

  border-radius: 0.5rem;

  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
`;

const LinkAddNew = styled(Link)`
  ${LinkDefaultStyle}
  color: ${(props) => props.theme.white};

  background-color: ${(props) => props.theme.darkBlue};

  transition: all 0.2s ease-in-out;
  &:hover {
    filter: brightness(1.75);
  }
`;

const LinkReturn = styled(Link)`
  ${LinkDefaultStyle}

  color: ${(props) => props.theme.darkBlue};

  background-color: transparent;

  transition: all 0.2s ease-in-out;
  &:hover {
    filter: brightness(1.75);
  }
`;

export {
  ModalBlock,
  ModalOverlay,
  ModalContainer,
  ButtonContainer,
  LinkAddNew,
  LinkReturn,
};
