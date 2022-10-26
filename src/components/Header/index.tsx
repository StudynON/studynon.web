import { LogoWithText } from "../Icons";
import { Container, Logo, FixedHeader } from "./style";

const Header = () => {
  return (
    <Container>
      <FixedHeader>
        <Logo title="ir para o inicio" to="/" tabIndex={0}>
          <LogoWithText color="#040EFF" />
        </Logo>
      </FixedHeader>
    </Container>
  );
};

export default Header;
