import styled from "styled-components";
import { IThemeProps } from "../../../../styles/theme";

interface IProps {
  theme: IThemeProps;
}

const FrameContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const Box = styled.div`
  padding: 10px 5px;
  margin: 10px 0%;

  border-radius: 8px;
  background: #fff;
  -webkit-box-shadow: 0px 0px 22px -8px #555;
  -moz-box-shadow: 0px 0px 22px -8px #555;
  box-shadow: 0px 0px 22px -8px #555;

  > div {
    flex-direction: column-reverse;

    @media ${({ theme }: IProps) => theme.devices.laptop} {
      & {
        display: flex;
        flex-direction: row;
      }
    }
  }
`;
const SubTitle = styled.h2`
  color: ${({ theme }: IProps) => theme.text};
  text-align: center;
  padding: 15px 0;
`;

const RowList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 57.56px;

  > div {
    margin: 0 5px;
  }
`;

const MaterialWrapper = styled.div`
  margin-left: 10px;
  flex: 1;
  min-width: 35%;



  h2 {
    color: #474747;
    font-size: 1.2rem;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  h3 {
    font-weight: 300;
    font-size: 1.1rem;
    color: #747474;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export { FrameContainer, Box, SubTitle, RowList };
export { MaterialWrapper };
