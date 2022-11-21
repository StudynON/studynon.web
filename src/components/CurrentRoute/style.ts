import styled from "styled-components";
import { IStyleCurrentRouteProps } from "./interfaces";

const gray = ({ theme }: IStyleCurrentRouteProps) => theme.gray;

export const navigation = styled.nav`
  display: flex;
  row-gap: .5rem;
  flex-direction: column;
  padding: 1rem 0;
  color: ${gray};
`;

export const previous = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const currentRoute = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  column-gap: .5rem;
`;
