import styled from "styled-components";

export const CheckboxContainer = styled.div`
  margin-top: 2.5rem;
`;

export const CheckboxLabel = styled.label`
  font-size: 20px;
  font-weight: 600;

  color: #474747;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CheckboxBox = styled.input.attrs({ type: "checkbox" })`
  width: 35px;
  aspect-ratio: 1;
  cursor: pointer;
`;
