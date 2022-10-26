import { IIcon } from "../interfaces";

const CheckIcon = ({ size, stroke }: IIcon) => {
  return (
    <svg
      width={size || "1rem"}
      height={size || "1rem"}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66663 20L16.6666 30L33.3333 10"
        stroke={stroke || "#474747"}
        strokeWidth="4.13302"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { CheckIcon };
