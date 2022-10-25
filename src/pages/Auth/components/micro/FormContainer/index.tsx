import {
  Form,
  Title
} from "./style";

interface IFormProps {
  title: string;
  onSubmit(event: React.SyntheticEvent): void;
  children: JSX.Element | Array<JSX.Element>;
}

export const FormContainer = (props: IFormProps) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Title>
        {props.title}
      </Title>

      {props.children}
    </Form>
  );
};
