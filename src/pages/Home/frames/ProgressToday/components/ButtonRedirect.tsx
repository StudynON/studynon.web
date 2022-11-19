import React from "react";

import styled, { css } from "styled-components";
import { ArrowLinkIcon } from "../../../../../components/Icons/ArrowLinkIcon";
import { IThemeProps } from "../../../../../styles/theme";

interface IProps {
  theme: IThemeProps;
}

const buttonStyle = css`
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  width: 49px;
  height: 38px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 5px;

  @media ${({ theme }: IProps) => theme.devices.mobileL} {
    & {
      display: flex;
    }
  }
`;
const Button = styled.button`
  ${buttonStyle};

  &:hover {
    background: #0007ae;
  }
`;

const Label = styled.span`
  font-size: 16px;
  display: none;

  color: #ffffff;
  ${Button}:hover & {
    display: flex;
  }
`;

const Icon = styled(ArrowLinkIcon)``;
const BGIcon = styled.div`
  display: flex;
  flex: none;

  ${Button}:hover & {
    display: none;
  }
`;

Icon.defaultProps = {
  size: "1.5rem",
};

const ButtonRedirect = () => {
  return (
    <Button>
      <BGIcon>
        <Icon />
      </BGIcon>
      <Label>Abrir</Label>
    </Button>
  );
};

export default ButtonRedirect;
