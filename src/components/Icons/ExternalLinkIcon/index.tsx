import { IIcon } from "../interfaces";

const ExternalLinkIcon = ({ size, color }: IIcon) => {
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
        d="M22.805 12.643a1.132 1.132 0 00-1.132 1.132v6.791a1.132 1.132 0 01-1.131 1.132H6.959a1.132 1.132 0 01-1.132-1.132V6.984A1.132 1.132 0 016.96 5.852h6.791a1.132 1.132 0 000-2.264H6.96a3.395 3.395 0 00-3.396 3.396v13.582a3.396 3.396 0 003.395 3.396h13.583a3.396 3.396 0 003.395-3.396v-6.791a1.132 1.132 0 00-1.132-1.132z"
        fill="currentColor"
      />
      <path
        d="M18.278 5.852h1.788l-7.12 7.108a1.132 1.132 0 000 1.607 1.132 1.132 0 001.608 0l7.12-7.108v1.788a1.132 1.132 0 102.263 0V4.72a1.132 1.132 0 00-1.132-1.132h-4.527a1.132 1.132 0 100 2.264z"
        fill="currentColor"
      />
    </svg>
  );
};

export { ExternalLinkIcon };
