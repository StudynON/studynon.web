import { useCallback, useState } from "react";

import * as Styled from "./style";
import { IDropdownFolderProps } from "./interfaces";
import { IMaterialItemProps } from "../materialListItem/interfaces";

import { ArrowDownIcon } from "../../Icons";
import { CircleProgress, MaterialItem } from "../";

export function DropdownFolder({ title, description, color, progress, materials }: IDropdownFolderProps): JSX.Element {
  const [droped, setDroped] = useState(false);

  const toggleVisibility = (): void => setDroped(!droped);

  const renderMaterial = (props: IMaterialItemProps): JSX.Element => {
    return <MaterialItem
      key={props.id}
      id={props.id}
      media={props.media}
      title={props.title}
      school={props.school}
      status={props.status}
      deadline={props.deadline}
    />;
  };

  const onClick = useCallback(toggleVisibility, [toggleVisibility]);

  return (
    <Styled.Dropdown>
      <Styled.Header onClick={onClick} folderColor={color}>
        <Styled.Describe>
          <Styled.Title>
            {title}
          </Styled.Title>

          <Styled.Description>
            {description}
          </Styled.Description>
        </Styled.Describe>

        <CircleProgress progress={progress} size={"4rem"} />

        <Styled.Arrow drop={droped}>
          <ArrowDownIcon />
        </Styled.Arrow>
      </Styled.Header>

      <Styled.Body drop={droped}>

        {materials.map(renderMaterial)}

      </Styled.Body>
    </Styled.Dropdown>
  );
}
