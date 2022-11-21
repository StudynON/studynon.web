import { Progress, Describe } from "./styles";
import type { IComponentProgressProps } from "./interfaces";

export const CircleProgress = ({
  progress = 0,
  size,
  barWidth,
  barColor,
  barCoverColor,
  textTransform,
  contentColor,
  contentSize,
  backgroundColor,
  describeColor,
  describeSize,
  describe,
  children
}: IComponentProgressProps) => {
  return (
    <Progress
      progress={progress}
      size={size}
      barWidth={barWidth}
      barColor={barColor}
      barCoverColor={barCoverColor}
      textTransform={textTransform}
      contentColor={contentColor}
      contentSize={contentSize}
      backgroundColor={backgroundColor}
    >
      {progress}%

      <Describe
        progress={0}
        describeColor={describeColor}
        describeSize={describeSize}
      >
        {children || describe}
      </Describe>
    </Progress>
  );
};
