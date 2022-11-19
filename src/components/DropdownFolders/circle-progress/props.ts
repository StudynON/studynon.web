
import { IProgressProps } from "./interfaces";

const defaultProps: IProgressProps = {
  progress: 0,
  size: "120px",
  barWidth: "15%",
  barColor: "#0007AE",
  barCoverColor: "#74747480",
  textTransform: "capitalize",
  contentColor: "#0007AE",
  contentSize: "1rem",
  describeColor: "#747474",
  describeSize: "1rem",
  backgroundColor: "#FFFFFF",
};

export const progress = ({ progress }: IProgressProps) => {
  return progress || defaultProps.progress;
};

export const size = ({ size }: IProgressProps) => {
  return size || defaultProps.size;
};

export const barWidth = ({ barWidth }: IProgressProps) => {
  return barWidth || defaultProps.barWidth;
};

export const barColor = ({ barColor, theme }: IProgressProps) => {
  return barColor || theme?.darkBlue || defaultProps.barColor;
};

export const barCoverColor = ({ barCoverColor, theme }: IProgressProps) => {
  return barCoverColor || theme?.lightGray || defaultProps.barCoverColor;
};

export const textTransform = ({ textTransform }: IProgressProps) => {
  return textTransform || defaultProps.textTransform;
};

export const contentColor = ({ contentColor, theme }: IProgressProps) => {
  return contentColor || theme?.darkBlue || defaultProps.contentColor;
};

export const contentSize = ({ contentSize }: IProgressProps) => {
  return contentSize || defaultProps.contentSize;
};

export const describeColor = ({ describeColor, theme }: IProgressProps) => {
  return describeColor || theme?.gray || defaultProps.describeColor;
};

export const describeSize = ({ describeSize }: IProgressProps) => {
  return describeSize || defaultProps.describeSize;
};

export const backgroundColor = ({ backgroundColor, theme }: IProgressProps) => {
  return backgroundColor || theme?.white || defaultProps.backgroundColor;
};
