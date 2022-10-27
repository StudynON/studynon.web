import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { IThemeProps } from "../../../../styles/theme";

interface ILinkProps {
  theme: IThemeProps;
}

const Container = styled.nav`
  width: 100%;
  margin-top: 48px;
`;

const transition = css`
  transition: all 220ms ease-in-out;
`;

const ListItem = styled.li`
  margin: 20px 0;
  padding: 7px;
  border-radius: 8px;
  cursor: pointer;

  ${transition}

  &:hover {
    background-color: ${({ theme }: ILinkProps) => theme.blue};

    & svg {
      ${transition}
      color: ${({ theme }: ILinkProps) => theme.white};
    }

    & span {
      ${transition}
      color: ${({ theme }: ILinkProps) => theme.white};
    }
  }
`;

const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }: ILinkProps) => theme.darkKettle};
  flex-wrap: nowrap;

  & span {
    font-weight: 500;
    margin-left: 10px;
    font-size: 1.09rem;

    @media (max-width: 600px) {
      white-space: nowrap;
    }
  }
`;

export { Container, ListItem, CustomLink };
