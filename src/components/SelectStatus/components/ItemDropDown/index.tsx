import { useCallback } from "react";
import { Item } from "./style";

interface IItemDropDown {
  item: string;
  onChangeValue: (value: string) => void;
}

function ItemDropDown({ item, onChangeValue }: IItemDropDown) {
  const handleOnClick = useCallback(() => onChangeValue(item), []);

  return (
    <Item key={item} onClick={handleOnClick}>
      {item}
    </Item>
  );
}

export default ItemDropDown;
