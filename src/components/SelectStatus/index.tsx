import React from "react";

import { SelectArrowDownIcon } from "../Icons/SelectArrowDownIcon";
import {
  ButtonText,
  DropdownButton,
  DropdownList,
  ItemDropDown,
} from "./style";

interface SelectCustomProps {
  data: string[];
  value: string;
  onChangeValue: (value: string) => void;
  accentColor?: string;
}

function SelectStatus({
  accentColor,
  data,
  value,
  onChangeValue,
}: SelectCustomProps) {
  return (
    <DropdownButton>
      <ButtonText>{value ? value : "STATUS"}</ButtonText>
      <SelectArrowDownIcon size="0.8em" color={accentColor || "#0007AE"} />

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

export default SelectStatus;
