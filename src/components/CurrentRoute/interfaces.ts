import type { IThemeProps } from "../../styles/theme";

export interface IStyleCurrentRouteProps {
  theme: IThemeProps;
}

export type IRouteProps = string | {
  to: string;
  content: string;
};

export interface ICurrentRouteProps {
  routes: Array<IRouteProps>;
}
