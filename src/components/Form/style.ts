import styled from "styled-components";

export const SForm = styled.form`
  max-width: 50rem;
  width: 100%;

  margin: 0 auto;

  padding: 1rem;

  h1 {
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 2.0625rem;

    margin-top: 40px;
    margin-bottom: 60px;
  }
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  gap: 25px;
`;

export const ContainerButton = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 3.75rem;
`;

export const ContainerDate = styled.div`
  width: 50%;

  display: flex;
  align-items: flex-end;
  gap: 25px;
`;
