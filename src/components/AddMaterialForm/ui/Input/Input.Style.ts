import styled, { css } from "styled-components";

export const SInputContainer = styled.div`
  font-family: "Roboto", sans-serif;
  color: #474747;

  width: auto;

  margin-top: 2rem;

  display: flex;
  flex-direction: column;
`;

export const SLabel = styled.label`
  font-size: clamp(1rem, 0.8977rem + 0.4545vw, 1.125rem);
  font-weight: 600;
`;

const defaultInput = css`
  font-size: 0.875rem;

  width: 100%;
  height: 2.1875rem;

  background-color: #fff;

  margin-top: 0.5rem;

  padding: 0.125rem 1rem;

  border: none;
  border-radius: 0.5rem;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const SInput = styled.input`
  ${defaultInput}
`;
