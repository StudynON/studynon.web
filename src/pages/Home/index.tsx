import styled from "styled-components";
import HomeCards from "../../components/HomeCards";

const Home = () => {
  return (
    <Container>
      <Title>O que você deseja fazer?</Title>
      <HomeCards />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  max-width: 1154px;
  margin: 3.75rem auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.darkKettle};
`;
