import { IIcon } from "../interfaces";

const ArrowDownIcon = ({ size, color }: IIcon) => {
  return (
    <svg
      width={size || "1rem"}
      height={size || "1rem"}
      color={color || "#000"}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.7 7.226l5.66 5.66 5.66-5.66 2.265 1.132-7.925 7.925-7.925-7.925L5.7 7.226z"
        fill="currentColor"
      />
    </svg>
  );
};

export { ArrowDownIcon };
