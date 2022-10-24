import { SInputContainer, SLabel, SInput } from "./Input.Style";

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
    </SInputContainer>
  );
};

export default Input;
