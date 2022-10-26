import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { IThemeProps } from "../../styles/theme";

interface IHeaderProps {
  theme: IThemeProps;
}

const HeaderHeight = css`
  height: 73px;
`;

const Container = styled.header`
  ${HeaderHeight}
`;

const FixedHeader = styled.div`
  position: fixed;
  background-color: ${({ theme }: IHeaderProps) => theme.white};
  box-shadow: 0px 1px 2px 0px rgb(0 0 0 / 10%);
  width: 100%;
  padding: 10px 20px;

  ${HeaderHeight}
`;

const Logo = styled(Link)`
  & svg {
    cursor: pointer;

    width: 160px;
    height: 60px;
  }
`;

export { Logo, FixedHeader, Container };
