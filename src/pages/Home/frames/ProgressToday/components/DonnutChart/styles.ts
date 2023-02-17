import styled, { css } from "styled-components";

const BallOut = css`
  height: 200px;
  width: 200px;
  float: left;
  margin: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BallIn = css`
  background: white;
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

interface IDonnutOut {
  percents: number;
}
export const DonnutOut = styled.div<IDonnutOut>`
  ${BallOut};
  ${({ percents }) => {
    const percentRange = (360 * percents) / 100;
    return css`
      background-image: conic-gradient(
        #0007ae 0deg,
        #0007ae ${percentRange}deg,
        rgba(116, 116, 116, 0.5) ${percentRange}deg,
        rgba(116, 116, 116, 0.5) 360deg
      );
    `;
  }}
`;
export const DonnutIn = styled.div`
  ${BallIn}
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PercentTitle = styled.span`
  font-weight: 300;
  font-size: 27px;
  line-height: 32px;
  text-align: center;
  color: #474747;
`;
