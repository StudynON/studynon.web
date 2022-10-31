import { Button } from "./style";

interface IButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const HamburgerButton = ({ onClick }: IButton) => {
  return (
    <Button
      type="button"
      title="abrir menu"
      name="button menu"
      onClick={onClick}
    >
      <div></div>
    </Button>
  );
};

export { HamburgerButton };
