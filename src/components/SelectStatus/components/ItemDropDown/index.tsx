import { Item } from "./style";

interface IItemDropDown {
  item: string;
  onChangeValue: (value: string) => void;
}

function ItemDropDown({ item, onChangeValue }: IItemDropDown) {
  const handleOnClick = () => onChangeValue(item);

  return (
    <Item key={item} onClick={handleOnClick}>
      {item}
    </Item>
  );
}

export default ItemDropDown;
