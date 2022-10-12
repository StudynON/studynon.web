import {
  CheckboxContainer,
  CheckboxLabel,
  CheckboxBox,
} from "./Checkbox.Style";

const Checkbox = () => {
  return (
    <>
      <CheckboxContainer>
        <CheckboxLabel>
          <CheckboxBox />
          Acesso vitalício
        </CheckboxLabel>
      </CheckboxContainer>
    </>
  );
};

export default Checkbox;
