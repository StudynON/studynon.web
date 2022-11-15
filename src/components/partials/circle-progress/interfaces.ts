import React from "react";
import { IThemeProps } from "../../../styles/theme";

interface IChildren {
  children?: React.ReactNode;
}

interface ITheme {
  theme?: IThemeProps;
}

export interface IProgressProps extends IChildren, ITheme {
  progress?: number;
  describe?: string;
  size?: string;
  barWidth?: string;
  barColor?: string;
  barCoverColor?: string;
  textTransform?: string;
  contentColor?: string;
  contentSize?: string;
  describeColor?: string;
  describeSize?: string;
  backgroundColor?: string;
}
