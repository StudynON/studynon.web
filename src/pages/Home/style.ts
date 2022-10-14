import styled from "styled-components";

const Container = styled.div``;

//exemplo de uso do tema
const Text = styled.h1`
  color: ${({ theme }) => theme.color.text};
`;

export { Container, Text };
