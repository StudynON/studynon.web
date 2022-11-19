import { IMaterialItemProps } from "../materialListItem/interfaces";

export interface IDropdownProps {
  title: string;
  description: string;
  color: string;
  progress: number;
  materials: Array<IMaterialItemProps>;
}
