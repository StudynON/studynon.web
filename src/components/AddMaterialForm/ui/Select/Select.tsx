import { ReactNode } from "react";
import { SSelectContainer, SSelect, SLabel, SErrMsg } from "./Select.Style";

interface ISelectProps {
  name: string;
  labelText: string;
  children: ReactNode[];
}

const Select = (props: ISelectProps) => {
  return (
    <SSelectContainer>
      <SLabel>{props.labelText}</SLabel>
      <SSelect {...props}>{props.children}</SSelect>
      <SErrMsg>Mensagem de Erro</SErrMsg>
    </SSelectContainer>
  );
};

export default Select;
