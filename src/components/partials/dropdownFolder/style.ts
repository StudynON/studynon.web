import styled from "styled-components";
import { IThemeProps } from "../../../styles/theme";

interface IActionProps {
  drop: boolean;
}

interface IDropdownProps {
  folderColor?: string;
  theme?: IThemeProps;
}

const rotate = ({ drop }: IActionProps) => {
  if (drop) return "rotateZ(180deg)";
  return "rotateZ(0deg)";
};

const bodyDisplay = ({ drop }: IActionProps) => {
  if (drop) return "block";
  return "none";
};

const folderColor = ({ folderColor = "blue", theme }: IDropdownProps) => {
  return theme && (theme[folderColor] ?? theme.blue);
};
const gray = ({ theme }: IDropdownProps) => theme?.gray;
const white = ({ theme }: IDropdownProps) => theme?.white;

export const Dropdown = styled.div`
  margin: 1rem 0;
  overflow: hidden;
  border-radius: 12px;
  background-color: ${white};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
  cursor: pointer;
  text-transform: capitalize;
  border-width: 0 .75rem;
  border-style: solid;
  border-color: transparent;
  border-left-color: ${folderColor};
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
`;

export const Describe = styled.div`
  margin-right: auto;
`;

export const Title = styled.h3`
  font-size: 1.1rem;
`;

export const Description = styled.p`
  color: ${gray};
`;

export const Arrow = styled.div`
  transform: ${rotate};
  transition: transform .2s ease;
`;

export const Body = styled.div`
  display: ${bodyDisplay};
  padding: 1rem;
`;
