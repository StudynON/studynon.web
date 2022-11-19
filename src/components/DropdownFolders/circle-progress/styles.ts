import styled from "styled-components";

import * as props from "./props";

export const Progress = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: hidden;

  position: relative;
  z-index: 1;
  max-width: 100%;
  max-height: 100%;
  width: ${props.size};
  height: ${props.size};
  border-radius: 50%;

  text-transform: ${props.textTransform};
  font-size: ${props.contentSize};
  color: ${props.contentColor};
  user-select: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    z-index: -1;
  }

  &::before {
    width: 100%;
    height: 100%;
    background-color: ${props.barCoverColor};
    background: conic-gradient(
      ${props.barColor} ${props.progress}%,
      ${props.barCoverColor} 0%,
      ${props.barCoverColor} 100%
    );
  }

  &::after {
    --bar-width: calc(100% - ${props.barWidth});
    width: var(--bar-width);
    height: var(--bar-width);
    background-color: ${props.backgroundColor};
  }
`;

export const Describe = styled.div`
  width: 100%;
  height: min-content;
  text-align: center;
  color: ${props.describeColor};
  font-size: ${props.describeSize};
  padding-left: ${props.barWidth};
  padding-right: ${props.barWidth};
`;
