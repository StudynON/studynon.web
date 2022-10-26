import styled, { css } from "styled-components";
import { IButton } from "./Button";

const buttonDefaultStyle = css`
  font-size: clamp(1rem, 0.8977rem + 0.4545vw, 1.125rem);
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;

  width: 160px;

  padding: 14px;

  background-color: #040eff;

  border: none;
  border-radius: 10px;

  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);

  cursor: pointer;
`;

const cancelButton = css`
  ${buttonDefaultStyle}
  border: 1px solid #040eff;
  color: #040eff;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  :hover {
    color: #fff;
    background-color: #040eff;
  }
`;

export const StyledButton = styled.button<IButton>`
  ${buttonDefaultStyle};
  ${({ isCancelVariant }: IButton) => isCancelVariant && cancelButton}
`;
