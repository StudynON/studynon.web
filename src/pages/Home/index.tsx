import { HomeCards } from "../../components/HomeCards";
import { ContainerHome, TitleHome } from "./style";

const Home = () => {
  return (
    <ContainerHome>
      <TitleHome>O que você deseja fazer?</TitleHome>
      <HomeCards />
    </ContainerHome>
  );
};

export default Home;
