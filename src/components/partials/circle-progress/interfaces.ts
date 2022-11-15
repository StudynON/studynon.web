import React from "react";

interface IChildren {
  children?: React.ReactNode;
}

export interface IProgressProps extends IChildren {
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
