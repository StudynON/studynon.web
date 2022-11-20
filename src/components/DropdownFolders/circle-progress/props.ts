import type { IStyledProgressProps } from "./interfaces";

const defaultProgressProps: IStyledProgressProps = {
  progress: 0,
  size: "120px",
  barWidth: "15%",
  barColor: "#0007AE",
  barCoverColor: "#74747480",
  textTransform: "capitalize",
  contentColor: "#0007AE",
  contentSize: "1rem",
  backgroundColor: "#FFFFFF",
  describeColor: "#747474",
  describeSize: "1rem",
};

export const progress = ({ progress }: IStyledProgressProps) => {
  return progress || defaultProgressProps.progress;
};

export const size = ({ size }: IStyledProgressProps) => {
  return size || defaultProgressProps.size;
};

export const barWidth = ({ barWidth }: IStyledProgressProps) => {
  return barWidth || defaultProgressProps.barWidth;
};

export const barColor = ({ barColor, theme }: IStyledProgressProps) => {
  return barColor || theme?.darkBlue || defaultProgressProps.barColor;
};

export const barCoverColor = ({ barCoverColor, theme }: IStyledProgressProps) => {
  return barCoverColor || theme?.lightGray || defaultProgressProps.barCoverColor;
};

export const textTransform = ({ textTransform }: IStyledProgressProps) => {
  return textTransform || defaultProgressProps.textTransform;
};

export const contentColor = ({ contentColor, theme }: IStyledProgressProps) => {
  return contentColor || theme?.darkBlue || defaultProgressProps.contentColor;
};

export const contentSize = ({ contentSize }: IStyledProgressProps) => {
  return contentSize || defaultProgressProps.contentSize;
};

export const describeColor = ({ describeColor, theme }: IStyledProgressProps) => {
  return describeColor || theme?.gray || defaultProgressProps.describeColor;
};

export const describeSize = ({ describeSize }: IStyledProgressProps) => {
  return describeSize || defaultProgressProps.describeSize;
};

export const backgroundColor = ({ backgroundColor, theme }: IStyledProgressProps) => {
  return backgroundColor || theme?.white || defaultProgressProps.backgroundColor;
};
