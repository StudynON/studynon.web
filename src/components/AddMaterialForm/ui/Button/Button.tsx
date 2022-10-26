import { ReactNode } from "react";
import { StyledButton } from "./Button.Style";

export interface IButton {
  children: ReactNode;
  isCancelVariant: boolean;
  onClick?: () => void;
}

const Button = ({ children, isCancelVariant, onClick }: IButton) => {
  return (
    <>
      <StyledButton isCancelVariant={isCancelVariant} onClick={onClick}>
        {children}
      </StyledButton>
    </>
  );
};

export default Button;
