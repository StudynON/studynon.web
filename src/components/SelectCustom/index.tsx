import React from "react";

import DropIcon from "../../assets/icons/arrow_down.png";
import {
  ButtonText,
  DropdownButton,
  DropdownList,
  ItemDropDown,
} from "./styled";

interface SelectCustomProps {
  data: string[];
  value: string;
  onChangeValue: (value: string) => void;
}

function SelectCustom({ data, value, onChangeValue }: SelectCustomProps) {
  return (
    <DropdownButton>
      <ButtonText>{value ? value : "STATUS"}</ButtonText>
      <img src={DropIcon} />

      <DropdownList>
        {data.map((item) => {
          return (
            <ItemDropDown
              key={item}
              onClick={function () {
                onChangeValue(item);
              }}
            >
              {item}
            </ItemDropDown>
          );
        })}
      </DropdownList>
    </DropdownButton>
  );
}

export default SelectCustom;
