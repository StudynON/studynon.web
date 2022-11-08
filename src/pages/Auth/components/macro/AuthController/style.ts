import styled from "styled-components";
import { IThemeProps } from "../../../../../styles/theme/";

interface IProps {
  theme: IThemeProps;
}

const breakpointLarge = ({ theme }: IProps) => theme.breakpoints.laptop;

export const Container = styled.div`
  display: flex;
  flex: 1;
  font-family: Roboto, sans-serif;

  &,
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Column = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 50%;
  min-height: 100vh;
  height: 100%;

  transition: width 0.2s ease;
`;

export const ColumnLeft = styled(Column)`
  width: 35%;

  @media (max-width: ${breakpointLarge}) {
    width: 100%;
  }
`;

export const ColumnRight = styled(Column)`
  width: 65%;
  background-color: rgba(0, 7, 128, 1);
  background-image: radial-gradient(
    circle farthest-corner at 0% 45%,
    rgba(37, 145, 251, 0.98) 0.1%,
    rgba(0, 7, 128, 1) 99.8%
  );
  transition: background-image 0.3s ease;

  @media (max-width: ${breakpointLarge}) {
    display: none;
  }
`;

export const Image = styled.img`
  max-width: 70%;
  width: 300px;
`;
