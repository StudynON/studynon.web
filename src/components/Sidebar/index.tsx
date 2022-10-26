import { Container } from "./style";
import { UserInfos, NavLinks } from "./components";

const Sidebar = () => {
  return (
    <Container>
      <UserInfos name="Parlandim" />
      <NavLinks />
    </Container>
  );
};

export default Sidebar;
