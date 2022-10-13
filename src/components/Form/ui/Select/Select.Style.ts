import styled from "styled-components";

export const SelectContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SelectLabel = styled.label`
  font-size: clamp(1rem, 0.8977rem + 0.4545vw, 1.125rem);
  font-weight: 600;
  color: #474747;
`;

export const SelectStyle = styled.select`
  font-family: "Robot", sans-serif;

  height: 2.1875rem;

  padding-left: 16px;

  background-color: #fff;

  border: none;
  border-radius: 8px;

  box-shadow: 0rem 0.125rem 0.5rem rgba(0, 0, 0, 0.1);

  cursor: pointer;

  option {
    font-weight: bold;
    background: white;
    padding: 0px 2px 1px;
    border: none;

    display: flex;
    white-space: pre;
    min-height: 8px;
    box-shadow: 0 2px 5px #000;
  }
`;
