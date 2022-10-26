import { Outlet } from "react-router-dom";
import Header from "../Header";
import { Container } from "./style";

const PrivateContainer = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default PrivateContainer;
