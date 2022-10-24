import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";
import { IThemeProps } from "../../../../../styles/theme";

interface ICustomLinkStyledProps {
  theme: IThemeProps;
}

const blue = ({ theme }: ICustomLinkStyledProps) => theme.blue;

export const Util = styled.div`
  font-size: .8rem;
  font-weight: bold;
`;

export const Link = styled(ReactLink)`
  padding: 0 .25rem;
  cursor: pointer;
  text-decoration: none;
  font-size: .8rem;
  color: ${blue};
`;
