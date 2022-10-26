import styled from "styled-components";

import { IThemeProps } from "../../../../../styles/theme";

interface IFormStyledProps {
  theme: IThemeProps;
}

const gray = ({ theme }: IFormStyledProps) => theme.gray;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  max-width: 100%;
  width: 300px;
  opacity: 1;
  transform: scale(0%);
  animation: show 0.2s both normal, opacity 0.7s both normal;

  @keyframes show {
    0% {
      transform: scale(0%);
    }
    100% {
      transform: scale(100%);
    }
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${gray};
`;
