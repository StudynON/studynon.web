import {
  Label,
  LabelContent as Content,
  Input,
  FormIcon,
} from "./style";

interface ILabelProps {
  id: string;
  describe: string;
  input: {
    type: string;
    name: string;
    placeholder: string;
    required?: boolean;
    minLength?: number;
  };
  children: JSX.Element | Array<JSX.Element>;
}

export const LabelContent = (props: ILabelProps) => {
  return (
    <Label htmlFor={props.id}>
      {props.describe}

      <Content>
        <Input id={props.id} {...props.input} />

        <FormIcon>
          {props.children}
        </FormIcon>
      </Content>
    </Label>
  );
};
