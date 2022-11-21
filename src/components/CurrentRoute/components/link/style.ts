import styled from "styled-components";
import { Link } from "react-router-dom";

import type { IThemeProps } from "../../../../styles/theme";

interface IStyleCustomLinkProps {
  theme: IThemeProps;
}

const gray = ({ theme }: IStyleCustomLinkProps) => theme.gray;
const darkKettle = ({ theme }: IStyleCustomLinkProps) => theme.darkKettle;

export const CustomLink = styled(Link)`
  cursor: pointer;
  margin-right: .5rem;
  text-decoration: none;
  font-size: small;
  color: ${gray};

  transition: color .2s ease;

  &:hover {
    text-decoration: underline;
    color: ${darkKettle};
  }

  &[href="/#unknow"],
  &[href=""] {
    pointer-events: none;
  }
`;
