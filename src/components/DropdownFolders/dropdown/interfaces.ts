import type { IThemeProps } from "../../../styles/theme";
import { IComponentProps as IMaterialItemProps } from "../materialListItem/interfaces";

export interface IComponentDropdownProps {
  title: string;
  description: string;
  color: string;
  progress: number;
  materials: Array<IMaterialItemProps>;
}

export interface ITheme {
  theme?: IThemeProps;
}

export interface IFolderProps extends ITheme {
  folderColor: string;
}

export interface IDropdownProps {
  drop?: boolean;
}
