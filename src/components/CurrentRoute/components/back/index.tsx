
interface IGoBackProps {
  children: React.ReactNode | Array<React.ReactNode>;
}

import {Button} from "./style";

const goBack = (): void => {
  if (window && window.history) {
    window.history.back();
  }
};

export function GoBack({ children }: IGoBackProps): JSX.Element {
  return (
    <Button onClick={goBack}>
      {children}
    </Button>
  );
}
