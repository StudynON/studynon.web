import {
  Button
} from "./style";

interface IButtonProps {
  value: string;
  invertIcon?: boolean;
  children?: JSX.Element | Array<JSX.Element>;
}

export const ButtonSubmit = ({value, invertIcon, children}: IButtonProps) => {
  return (
    <Button type="submit">
      {!invertIcon && children}
      {value}
      {invertIcon && children}
    </Button>
  );
};
