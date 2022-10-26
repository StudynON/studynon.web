import styled from "styled-components";
import { IThemeProps } from "../../../../styles/theme";

interface IInfosProps {
  theme: IThemeProps;
}

const Container = styled.section`
  display: flex;
  align-items: center;
`;

const UserPicture = styled.div`
  max-width: 50px;
  max-height: 50px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const Infos = styled.div`
  margin-left: 5px;
  color: ${({ theme }: IInfosProps) => theme.darkKettle};
  & h4 {
    font-size: 1.4rem;
    font-weight: 400;
  }

  & span {
    color: #47474799;
    font-size: 0.9rem;
    font-style: italic;
    font-weight: 400;
  }
`;

export { Container, UserPicture, Infos };
