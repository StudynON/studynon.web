import { ReactNode } from "react";
import { SSelectContainer, SSelect, SLabel } from "./Select.Style";

interface ISelectProps {
  name: string;
  labelText: string;
  children: ReactNode[];
  required?: boolean;
}

const Select = (props: ISelectProps) => {
  return (
    <SSelectContainer>
      <SLabel>{props.labelText}</SLabel>
      <SSelect {...props}>{props.children}</SSelect>
    </SSelectContainer>
  );
};

export default Select;
