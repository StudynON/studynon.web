import type { IThemeProps } from "../../../styles/theme";

interface IChildren {
  children?: React.ReactNode;
}

interface ITheme {
  theme?: IThemeProps;
}

interface IProgressProps {
  progress: number;
  size?: string;
  barWidth?: string;
  barColor?: string;
  barCoverColor?: string;
  textTransform?: string;
  contentColor?: string;
  contentSize?: string;
  backgroundColor?: string;
}

interface IDescribeProps {
  describe?: string;
  describeSize?: string;
  describeColor?: string;
}

export type IStyledProgressProps = IProgressProps & IDescribeProps & ITheme;
export type IComponentProgressProps = IProgressProps & IDescribeProps & IChildren;
