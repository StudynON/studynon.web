import { SLabel, SChekbox } from "./Checkbox.Style";

interface ICheckbox {
  onChange: () => void;
}

const Checkbox = (props: ICheckbox) => {
  return (
    <SLabel>
      <SChekbox type={"checkbox"} {...props} />
      Acesso vitalício
    </SLabel>
  );
};

export default Checkbox;
