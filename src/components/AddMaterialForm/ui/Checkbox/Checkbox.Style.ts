import styled from "styled-components";

export const SLabel = styled.label`
  font-size: clamp(1rem, 0.8977rem + 0.4545vw, 1.125rem);
  font-weight: 600;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SChekbox = styled.input`
  width: 1.5rem;
  aspect-ratio: 1;

  cursor: pointer;
`;
