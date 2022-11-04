import * as Styled from "./style";

import {
  PlusIcon,
  CheckIcon,
  VideoCamIcon,
  ExternalLinkIcon,
  PaperClipIcon,
} from "../../Icons/";

interface IMaterialItemProps {
  status: boolean;
  id: number;
  media: string;
  title: string;
  school: string;
  deadline: string;
}

export function MaterialItem(props: IMaterialItemProps) {
  const { status, id, media, title, school, deadline } = props;
  const inputId = `checkbox-${id}`;

  return (
    <Styled.Item htmlFor={inputId}>
      <Styled.ToggleSelection>
        <Styled.Input
          id={inputId}
          type={"checkbox"}
          name="select-material"
          value={id}
        />

        <PlusIcon size="1.5rem" />
        <CheckIcon size="1.5rem" />
      </Styled.ToggleSelection>

      <Styled.Media>
        {media === "video" && <VideoCamIcon size="1.5rem" />}
        {media === "link" && <ExternalLinkIcon size="1.5rem" />}
        {media === "file" && <PaperClipIcon size="1.5rem" />}
      </Styled.Media>

      <Styled.Describe>
        <Styled.Title>
          {title}
        </Styled.Title>

        <Styled.Subtitle>
          {school}
        </Styled.Subtitle>
      </Styled.Describe>

      <Styled.Details>
        <Styled.Status>
          - {status ? "concluído" : "pendente"} -
        </Styled.Status>

        <Styled.Deadline>
          {deadline}
        </Styled.Deadline>
      </Styled.Details>
    </Styled.Item>
  );
}
