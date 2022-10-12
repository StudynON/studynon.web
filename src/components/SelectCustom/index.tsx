import React from "react";

import DropIcon from "../../assets/icons/arrow_down.png";
import {
  ButtonText,
  DropdownButton,
  DropdownList,
  ItemDropDown,
} from "./styled";

type Props = {
  data: string[];
  value: string;
  onChangeValue: (value: string) => void;
};

function SelectCustom({ data, value, onChangeValue }: Props) {
  return (
    <DropdownButton>
      <ButtonText>{value ? value : "STATUS"}</ButtonText>
      <img src={DropIcon} />

      <DropdownList>
        {data.map((item) => (
          <ItemDropDown key={item} onClick={() => onChangeValue(item)}>
            {item}
          </ItemDropDown>
        ))}
      </DropdownList>
    </DropdownButton>
  );
}

export default SelectCustom;
