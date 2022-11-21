import { IIcon } from "../interfaces";

const ArrowPrevious = ({ size, color }: IIcon) => {
  return (
    <svg
      width={size || "1rem"}
      height={size || "1rem"}
      color={color || "#000"}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.33333 5.8335L3.5 11.6668L9.33333 17.5002"
        stroke="#474747"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3.5 11.667H12.8333C19.2768 11.667 24.5 16.8902 24.5 23.3337V24.5003"
        stroke="#474747"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ArrowPrevious };
