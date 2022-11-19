import React from "react";
import { ExternalLinkIcon, VideoCamIcon } from "../../../../components/Icons";
import SelectStatus from "../../../../components/SelectStatus";

import BallIndicator from "./components/BallIndicator";
import ButtonRedirect from "./components/ButtonRedirect";

import DonnutChart from "./components/DonnutChart";

import materiais from "./mock/materiais.json";
import {
  Box,
  FrameContainer,
  MaterialWrapper,
  RowList,
  SubTitle,
} from "./styles";

function handleChangeValue() {
  return;
}

const ProgressToday = () => {
  return (
    <FrameContainer>
      <Box>
        <SubTitle>{"Quinta, 08 de set."}</SubTitle>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 2 }}>
            {materiais.map((material) => {
              return (
                <RowList key={material.title}>
                  <ButtonRedirect />

                  <div>
                    <BallIndicator color="#FF6B00" />
                  </div>
                  <div>
                    {material.midiaType === "link" ? (
                      <VideoCamIcon size="1.3rem" color="#474747" />
                    ) : (
                      <ExternalLinkIcon size="1.3rem" color="#474747" />
                    )}
                  </div>

                  <MaterialWrapper>
                    <h2>{material.title}</h2>
                    <h3>{material.instituition}</h3>
                  </MaterialWrapper>
                  <div>
                    <SelectStatus
                      data={["CONCLUÍDO", "PENDENTE"]}
                      value={material.status}
                      onChangeValue={handleChangeValue}
                    />
                  </div>
                </RowList>
              );
            })}
          </div>
          <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
            <DonnutChart percents={75} />
          </div>
        </div>
      </Box>
    </FrameContainer>
  );
};

export default ProgressToday;
