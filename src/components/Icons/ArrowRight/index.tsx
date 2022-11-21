import { IIcon } from "../interfaces";

const ArrowRight = ({ size, color }: IIcon) => {
  return (
    <svg
      width={size || "1rem"}
      height={size || "1rem"}
      color={color || "#000"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.00009 15.0005L11.0001 10.0005L6.00009 5.00049L7.00009 3.00049L14.0001 10.0005L7.00009 17.0005L6.00009 15.0005Z" fill={`${color || "#000"}`}/>
    </svg>
  );
};

export { ArrowRight };
