import ProgressToday from "./frames/ProgressToday";
import { HomeCards } from "../../components/HomeCards";

import { ContainerHome, TitleHome } from "./style";

const Home = () => {
  return (
    <ContainerHome>
      <TitleHome>O que você deseja fazer?</TitleHome>
      <HomeCards />

      <TitleHome>Como está o seu progresso hoje?</TitleHome>
      <ProgressToday />
    </ContainerHome>
  );
};

export default Home;
