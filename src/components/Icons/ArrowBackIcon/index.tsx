import { IIcon } from "../interfaces";

const ArrowBackIcon = ({ size, color }: IIcon) => {
  return (
    <svg
      width={size || "1rem"}
      height={size || "1rem"}
      color={color || "#000"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.333 5.833L3.5 11.668 9.333 17.5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 11.667h9.333c6.444 0 11.667 5.223 11.667 11.667V24.5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ArrowBackIcon };
