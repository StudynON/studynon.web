import { LogoWithText } from "../Icons";
import { Container, Logo, FixedHeader, HamburgerButton } from "./style";

interface IHeader {
  openMenuMobile: React.MouseEventHandler<HTMLButtonElement>;
}

const Header = ({ openMenuMobile }: IHeader) => {
  return (
    <Container>
      <FixedHeader>
        <Logo title="ir para o inicio" to="/" tabIndex={0}>
          <LogoWithText color="#040EFF" />
        </Logo>

        <HamburgerButton
          type="button"
          title="abrir menu"
          name="button menu"
          onClick={openMenuMobile}
        >
          <div></div>
        </HamburgerButton>
      </FixedHeader>
    </Container>
  );
};

export default Header;
