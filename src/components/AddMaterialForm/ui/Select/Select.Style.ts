import styled from "styled-components";

export const SSelectContainer = styled.div`
  font-family: "Roboto", sans-serif;
  color: #474747;

  width: 100%;

  margin-top: 2rem;

  display: flex;
  flex-direction: column;
`;

export const SSelect = styled.select`
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;

  width: 100%;
  height: 2.1875rem;

  margin-top: 0.5rem;

  padding: 0.125rem 1rem;

  background-color: #fff;

  border: none;
  border-radius: 0.5rem;

  cursor: pointer;

  & option {
    padding: 2px 16px;
    background-color: #fff;
    white-space: pre;
  }
`;

export const SLabel = styled.label`
  font-size: clamp(1rem, 0.8977rem + 0.4545vw, 1.125rem);
  font-weight: 600;
`;
