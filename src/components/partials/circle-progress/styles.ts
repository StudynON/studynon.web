import styled from "styled-components";

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

const progress = ({ progress }: IProgressProps) => progress || defaultProps.progress;
const size = ({ size }: IProgressProps) => size || defaultProps.size;
const barWidth = ({ barWidth }: IProgressProps) => barWidth || defaultProps.barWidth;
const barColor = ({ barColor }: IProgressProps) => barColor || defaultProps.barColor;
const barCoverColor = ({ barCoverColor }: IProgressProps) => barCoverColor || defaultProps.barCoverColor;
const textTransform = ({ textTransform }: IProgressProps) => textTransform || defaultProps.textTransform;
const contentColor = ({ contentColor }: IProgressProps) => contentColor || defaultProps.contentColor;
const contentSize = ({ contentSize }: IProgressProps) => contentSize || defaultProps.contentSize;
const describeColor = ({ describeColor }: IProgressProps) => describeColor || defaultProps.describeColor;
const describeSize = ({ describeSize }: IProgressProps) => describeSize || defaultProps.describeSize;
const backgroundColor = ({ backgroundColor }: IProgressProps) => backgroundColor || defaultProps.backgroundColor;

export const Progress = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: hidden;

  position: relative;
  max-width: 100%;
  max-height: 100%;
  width: ${size};
  height: ${size};
  border-radius: 50%;

  text-transform: ${textTransform};
  font-size: ${contentSize};
  color: ${contentColor};

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    z-index: -1;
  }

  &::before {
    width: 100%;
    height: 100%;
    background-color: ${barCoverColor};
    background: conic-gradient(
      ${barColor} ${progress}%,
      ${barCoverColor} 0%,
      ${barCoverColor} 100%
    );
  }

  &::after {
    --bar-width: calc(100% - ${barWidth});
    width: var(--bar-width);
    height: var(--bar-width);
    background-color: ${backgroundColor};
  }
`;

export const Describe = styled.div`
  width: 100%;
  height: min-content;
  text-align: center;
  color: ${describeColor};
  font-size: ${describeSize};
  padding-left: ${barWidth};
  padding-right: ${barWidth};
`;
