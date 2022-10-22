import { IIcon } from "../interfaces";

const CalendarIcon = ({ size, color }: IIcon) => {
  return (
    <svg
      width={size || "1rem"}
      height={size || "1rem"}
      color={color || "#000"}
      fill="none"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clipPath="url(#clip0_266_467)"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22.818 3.727H6.455A5.455 5.455 0 001 9.182v13.636a5.455 5.455 0 005.455 5.454h16.363a5.455 5.455 0 005.455-5.454V9.182a5.455 5.455 0 00-5.455-5.455zM9.325 1v5.455M20.234 1v5.455M1.143 11.909h27.273" />
      </g>
      <defs>
        <clipPath id="clip0_266_467">
          <path fill="#fff" d="M0 0H30V30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { CalendarIcon };
