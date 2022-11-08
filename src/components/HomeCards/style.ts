import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { IThemeProps } from "../../styles/theme/";

interface IProps {
  theme: IThemeProps;
}

const CardContainer = styled.div`
  width: 100%;

  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  justify-items: center;
  gap: 1rem;
`;

const transition = css`
  transition: all 0.3s ease-in-out;
`;

const Card = styled.div`
  width: 14rem;
  height: 20rem;

  text-align: center;

  padding: 2.25rem;

  border-radius: 1.125rem;

  background-color: ${({ theme }: IProps) => theme.white};

  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  ${transition}

  & h1 {
    color: ${({ theme }: IProps) => theme.darkBlue};
    text-transform: uppercase;
    line-height: 1.25rem;
    font-weight: 600;
    font-size: 1.25rem;
  }

  & p {
    color: ${(props) => props.theme.gray};
    line-height: 1.1875rem;
  }
  
  & svg {
    color: ${({ theme }: IProps) => theme.darkBlue};
  }

  &:hover {
    background-color: ${({ theme }: IProps) => theme.darkBlue};
    cursor: pointer;

    p,
    h1,
    svg {
      ${transition}

      color: white;
    }
  }
`;

const LinkCard = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export { CardContainer, Card, LinkCard };
