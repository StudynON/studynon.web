import { SInputContainer, SLabel, SInput, SErrMsg } from "./Input.Style";

interface IInputProps {
  type: string;
  name: string;
  placeholder?: string;
  labelText?: string;
  isDateVariant?: boolean;
  disabled?: boolean;
  required?: boolean;
}

const Input = (props: IInputProps) => {
  return (
    <SInputContainer>
      <SLabel>{props.labelText}</SLabel>
      <SInput {...props} />
      <SErrMsg>Mensagem de erro</SErrMsg>
    </SInputContainer>
  );
};

export default Input;
