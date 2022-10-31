import { NavLinks, UserInfos } from "../components";
import { Container, CloseButton } from "./style";

interface ISidebarMobile {
  closeMenuMobile: React.MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
}

const SidebarMobile = ({ isActive, closeMenuMobile }: ISidebarMobile) => {
  return (
    <Container className={isActive ? "active" : "disabled"}>
      <CloseButton
        type="button"
        title="botão para fechar menu"
        onClick={closeMenuMobile}
      />
      <UserInfos name="Parlandim" />
      <NavLinks />
    </Container>
  );
};

export default SidebarMobile;
