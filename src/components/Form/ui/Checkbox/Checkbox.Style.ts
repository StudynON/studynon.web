import styled from "styled-components";

export const CheckboxContainer = styled.div`
  width: 100%;
  
  margin-top: 2.5rem;
`;

export const CheckboxLabel = styled.label`
  font-size: clamp(1rem, 0.8977rem + 0.4545vw, 1.125rem);
  font-weight: 600;

  color: #474747;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CheckboxBox = styled.input.attrs({ type: "checkbox" })`
  width: 25px;
  aspect-ratio: 1;
  cursor: pointer;
`;
