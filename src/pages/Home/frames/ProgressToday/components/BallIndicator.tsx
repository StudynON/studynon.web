import styled from "styled-components";

interface IBallIndicator {
  color?: string;
}

const BallIndicator = styled.div<IBallIndicator>`
  background: ${({ color }) => (color ? color : "blue")};
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin: 0 5px;
`;

export default BallIndicator;
