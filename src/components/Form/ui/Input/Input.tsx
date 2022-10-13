import { InputContainer, InputLabel, InputText } from "./Input.Style";

interface IInput {
  name: string;
  labelTitle: string;
  placeholder?: string;
  type?: string;
  width?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: IInput) => {
  return (
    <>
      <InputContainer>
        <InputLabel>{props.labelTitle}</InputLabel>
        <InputText
          name={props.name}
          placeholder={props.placeholder}
          type={props.type}
          width={props.width}
          onChange={props.onChange}
        />
      </InputContainer>
    </>
  );
};

export default Input;
