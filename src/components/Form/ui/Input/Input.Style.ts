import styled from "styled-components";

export const InputContainer = styled.div`
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #474747;
`;

export const InputText = styled.input`
  font-family: "Robot", sans-serif;

  width: ${(props) => props.width};
  /* width: 100%; */

  height: 35px;

  padding-left: 1rem;

  border: none;
  border-radius: 8px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
