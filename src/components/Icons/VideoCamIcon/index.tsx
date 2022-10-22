import { IIcon } from "../interfaces";

const VideoCamIcon = ({ size, color }: IIcon) => {
  return (
    <svg
      width={size || "1rem"}
      height={size || "1rem"}
      color={color || "#000"}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.362 8.66l-3.396 1.956V6.584a1.7 1.7 0 00-1.698-1.698H3.564a1.7 1.7 0 00-1.698 1.698v15.28a1.7 1.7 0 001.698 1.698h15.704a1.7 1.7 0 001.698-1.698v-4.032l3.396 1.955a.849.849 0 001.273-.732v-9.66a.85.85 0 00-1.273-.734zm-5.306 12.992H3.776V6.796h15.28v14.856zm4.669-4.43l-2.759-1.587v-2.82l2.759-1.589v5.996zm-18.039-7.03h2.971a.213.213 0 00.212-.213V8.706a.213.213 0 00-.212-.212H5.686a.213.213 0 00-.212.212v1.273c0 .117.095.213.212.213z"
        fill="currentColor"
      />{" "}
    </svg>
  );
};

export { VideoCamIcon };
