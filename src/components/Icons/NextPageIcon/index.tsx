import { IIcon } from "../interfaces";

const NextPageIcon = ({ size, color }: IIcon) => {
  return (
    <svg
      width={size || "1rem"}
      height={size || "1rem"}
      color={color || "#000"}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.997 11.622L16.072 1.434v5.66C2.54 7.094.979 18.05 1.355 24.075c.568-3.04.832-7.924 14.717-7.924v5.66l7.925-10.189z"
        stroke="currentColor"
        strokeWidth={2.26415}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { NextPageIcon };
