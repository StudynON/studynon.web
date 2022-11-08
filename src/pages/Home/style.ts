import styled from "styled-components";

import { IThemeProps } from "../../styles/theme/";

interface IProps {
  theme: IThemeProps;
}

const ContainerHome = styled.div`
  max-width: 1154px;
  margin: 3.75rem auto;
`;

const TitleHome = styled.h1`
  font-size: clamp(1.5rem, 1.2733rem + 1.0076vw, 2rem);
  font-weight: 600;
  color: ${({ theme }: IProps) => theme.darkKettle};

  margin-left: 2rem;

  @media ${({ theme }: IProps) => theme.devices.desktop} {
    margin: auto;
  }
`;

export { ContainerHome, TitleHome };
