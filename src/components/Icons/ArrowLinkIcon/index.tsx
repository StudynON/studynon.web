import { IIcon } from "../interfaces";

const ArrowLinkIcon = ({ size, color }: IIcon) => {
  return (
    <svg
      width={size || "1rem"}
      height={size || "1rem"}
      color={color || "#000"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
    >
      <path
        d="M23.9965 11.6223L16.072 1.43359V7.09397C2.54029 7.09397 0.979157 18.0502 1.35501 24.0751C1.92331 21.0355 2.18708 16.1506 16.072 16.1506V21.811L23.9965 11.6223Z"
        stroke="#0007AE"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ArrowLinkIcon };
