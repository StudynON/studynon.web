import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import SidebarMobile from "../Sidebar/SidebarMobile";
import { Container, ContentSection, Main } from "./style";

const PrivateContainer = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const toggleToActive = () => {
    setMenuIsActive(true);
  };

  const toggleToDisabled = () => {
    setMenuIsActive(false);
  };

  return (
    <Container>
      <Header openMenuMobile={toggleToActive} />

      <ContentSection>
        <Sidebar />
        <SidebarMobile
          isActive={menuIsActive}
          closeMenuMobile={toggleToDisabled}
        />

        <Main>
          <Outlet />
        </Main>
      </ContentSection>
    </Container>
  );
};

export default PrivateContainer;
