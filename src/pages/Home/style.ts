import styled from "styled-components";

const Container = styled.div``;

const Text = styled.h1`
  color: ${({ theme }) => theme.color.text};
`;

export { Container, Text };
