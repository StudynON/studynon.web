import { Container, FixedContainer } from "./style";
import { UserInfos, NavLinks } from "./components";

const Sidebar = () => {
  return (
    <Container>
      <FixedContainer>
        <UserInfos name="Parlandim" />
        <NavLinks />
      </FixedContainer>
    </Container>
  );
};

export default Sidebar;
