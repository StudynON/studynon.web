import React from "react";

import { IProgressProps } from "./interfaces";
import { Progress, Describe } from "./styles";

export const CircleProgress = (props: IProgressProps) => {
  return (
    <Progress
      progress={props.progress}
      size={props.size}
      barWidth={props.barWidth}
      barColor={props.barColor}
      barCoverColor={props.barCoverColor}
      textTransform={props.textTransform}
      contentColor={props.contentColor}
      contentSize={props.contentSize}
      backgroundColor={props.backgroundColor}
    >
      {props.progress}%

      <Describe
        describeColor={props.describeColor}
        describeSize={props.describeSize}
      >
        {props.children || props.describe}
      </Describe>
    </Progress>
  );
};
