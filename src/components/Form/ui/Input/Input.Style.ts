import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;

  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputLabel = styled.label`
  font-size: clamp(1rem, 0.8977rem + 0.4545vw, 1.125rem);
  font-weight: 600;
  color: #474747;
`;

export const InputText = styled.input`
  font-family: "Robot", sans-serif;

  max-width: ${(props) => props.width};
  min-width: 145px;
  width: 100%;

  height: 35px;

  padding-left: 1rem;

  border: none;
  border-radius: 8px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
