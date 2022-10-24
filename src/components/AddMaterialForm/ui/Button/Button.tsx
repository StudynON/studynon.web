import { ReactNode } from "react";
import { StyledButon } from "./Button.Style";

export interface IButton {
  children: ReactNode;
  isCancelVariant: boolean;
  onClick?: () => void;
}

const Button = ({ children, isCancelVariant, onClick }: IButton) => {
  return (
    <>
      <StyledButon isCancelVariant={isCancelVariant} onClick={onClick}>
        {children}
      </StyledButon>
    </>
  );
};

export default Button;
