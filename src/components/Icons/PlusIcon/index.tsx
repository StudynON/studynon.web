import { IIcon } from "../interfaces";

const PlusIcon = ({ size, color }: IIcon) => {
  return (
    <svg
      width={size || "1rem"}
      height={size || "1rem"}
      color={color || "#000"}
      viewBox="0 0 79 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.56 65.428V39.402m0 0V13.376m0 26.026h26.026m-26.026 0H13.534"
        stroke="currentColor"
        strokeWidth={4.33763}
        strokeLinecap="round"
      />
    </svg>
  );
};

export { PlusIcon };
