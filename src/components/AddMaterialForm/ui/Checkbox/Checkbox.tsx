import { SLabel, SCheckbox } from "./Checkbox.Style";

interface ICheckbox {
  onChange: () => void;
}

const Checkbox = (props: ICheckbox) => {
  return (
    <SLabel>
      <SCheckbox type={"checkbox"} {...props} />
      Acesso vitalício
    </SLabel>
  );
};

export default Checkbox;
