import { IMaterialItemProps } from "../materialListItem/interfaces";

export interface IDropdownFolderProps {
  title: string;
  description: string;
  color: string;
  progress: number;
  materials: Array<IMaterialItemProps>;
}
