import { InputContainer, InputLabel, InputText } from "./Input.Style";

interface IInput {
  width?: string;
  labelTitle: string;
  placeholder?: string;
  type?: string;
}

const Input = (props: IInput) => {
  return (
    <>
      <InputContainer>
        <InputLabel>{props.labelTitle}</InputLabel>
        <InputText
          placeholder={props.placeholder}
          type={props.type}
          width={props.width}
        />
      </InputContainer>
    </>
  );
};

export default Input;
