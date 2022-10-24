import {
  Container,
  ColumnLeft,
  ColumnRight,
  Image
} from "./style";

import {
  Login,
  Register,
  ForgetPassword,
} from "../";

interface IAuthProps {
  page: string;
}

export const AuthController = ({ page }: IAuthProps) => {
  return (
    <Container>
      <ColumnLeft>
        {page === "login" && <Login />}
        {page === "register" && <Register />}
        {page === "forget-password" && <ForgetPassword />}
      </ColumnLeft>

      <ColumnRight>
        <Image src={"/owlrange_logo_white.svg"} alt={"Logo Owlrange Notes"} />
      </ColumnRight>
    </Container>
  );
};
