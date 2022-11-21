import type { IThemeProps } from "../../../styles/theme";

export interface IComponentProps {
  status: boolean;
  id: number;
  media: string;
  title: string;
  school: string;
  deadline: string;
}

export interface IStyleProps {
  theme: IThemeProps;
}
