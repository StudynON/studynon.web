import { LogoWithText } from "../Icons";
import { Container, Logo, FixedHeader } from "./style";
import { HamburgerButton } from "./components";

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

        <HamburgerButton onClick={openMenuMobile} />
      </FixedHeader>
    </Container>
  );
};

export default Header;
