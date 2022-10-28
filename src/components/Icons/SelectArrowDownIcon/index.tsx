import { IIcon } from "../interfaces";

const SelectArrowDownIcon = ({ size, color }: IIcon) => {
  return (
    <svg
      width={size || "1rem"}
      height={size || "1rem"}
      color={color || "#000"}
      viewBox="0 0 15 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.49933 0.00012207L7.49933 5.00012L12.4993 0.00012207L14.4993 1.00012L7.49933 8.00012L0.499329 1.00012L2.49933 0.00012207Z"
        fill={color || "#000"}
      />
    </svg>
  );
};

export { SelectArrowDownIcon };
