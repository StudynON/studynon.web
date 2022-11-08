import { Link } from "react-router-dom";
import styled from "styled-components";

import { IThemeProps } from "../../styles/theme/";

interface IProps {
  theme: IThemeProps;
}

export const CardContainer = styled.div`
  width: 100%;

  margin-top: 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const LinkCard = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Card = styled.div`
  width: 71px;
  height: 98px;

  background-color: ${({ theme }: IProps) => theme.white};

  color: white;

  padding: 0.5rem;

  border-radius: 5px;

  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${({ theme }: IProps) => theme.darkBlue};
  }

  transition: all 0.3s ease-in-out;

  :hover {
    background-color: ${({ theme }: IProps) => theme.darkBlue};

    h1,
    p,
    svg {
      color: ${({ theme }: IProps) => theme.white};
    }
  }

  @media ${({ theme }: IProps) => theme.devices.mobileL} {
    width: 8.75rem;
    height: 12.25rem;

    svg {
      width: 4.375rem;
      height: 4.375rem;
    }
  }

  @media ${({ theme }: IProps) => theme.devices.tablet} {
    width: 11.75rem;
    height: 17.5rem;

    border-radius: 1.25rem;
  }
`;

export const CardTitle = styled.h1`
  font-size: clamp(0.625rem, 0.3571rem + 1.1905vw, 1.25rem);
  text-align: center;
  color: ${({ theme }: IProps) => theme.darkBlue};
  text-transform: uppercase;
  font-weight: 600;

  transition: all 0.3s ease-in-out;
`;

export const CardDescription = styled.p`
  color: ${({ theme }: IProps) => theme.gray};
  text-align: center;

  display: none;

  transition: all 0.3s ease-in-out;

  @media ${({ theme }: IProps) => theme.devices.tablet} {
    display: block;
  }
`;
