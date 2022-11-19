import React from "react";
import { DonnutIn, DonnutOut, PercentTitle } from "./styles";

interface IProps {
  percents: number;
}

function DonnutChart(props: IProps) {
  return (
    <DonnutOut {...props}>
      <DonnutIn>
        <PercentTitle>{props.percents}% concluído</PercentTitle>
      </DonnutIn>
    </DonnutOut>
  );
}

export default DonnutChart;
