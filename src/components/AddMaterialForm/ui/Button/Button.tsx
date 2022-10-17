import { ReactNode } from "react";
import { StyledButon } from "./Button.Style";

export interface IButton {
  children: ReactNode;
  isCancelVariant: boolean;
}

const Button = ({ children, isCancelVariant }: IButton) => {
  return (
    <>
      <StyledButon isCancelVariant={isCancelVariant}>{children}</StyledButon>
    </>
  );
};

export default Button;
