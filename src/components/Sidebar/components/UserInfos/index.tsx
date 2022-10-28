import { Container, UserPicture, Infos } from "./style";
import PictureIcon from "../../../../assets/user-avatar.svg";

interface IUserProps {
  name: string;
}

const UserInfos = ({ name }: IUserProps) => {
  return (
    <Container>
      <UserPicture>
        <img src={PictureIcon} alt="user picture" />
      </UserPicture>
      <Infos>
        <h4>{name}</h4>
        <span>Assinatura gratuita</span>
      </Infos>
    </Container>
  );
};

export { UserInfos };
