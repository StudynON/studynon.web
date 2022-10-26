import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, ContentSection, Main } from "./style";

const PrivateContainer = () => {
  return (
    <Container>
      <Header />

      <ContentSection>
        <Sidebar />

        <Main>
          <Outlet />
        </Main>
      </ContentSection>
    </Container>
  );
};

export default PrivateContainer;
