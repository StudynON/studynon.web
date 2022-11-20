import * as Styled from "./style";

import { IComponentProps } from "./interfaces";

import {
  PlusIcon,
  CheckIcon,
  VideoCamIcon,
  ExternalLinkIcon,
  PaperClipIcon,
} from "../../Icons";

export function MaterialItem(props: IComponentProps) {
  const { status, id, media, title, school, deadline } = props;
  const inputId = `checkbox-${id}`;

  return (
    <Styled.Item htmlFor={inputId}>
      <div>
        <Styled.Input
          id={inputId}
          type={"checkbox"}
          name="select-material"
          value={id}
        />

        <PlusIcon size="1.5rem" />
        <CheckIcon size="1.5rem" />
      </div>

      <div>
        {media === "video" && <VideoCamIcon size="1.5rem" />}
        {media === "link" && <ExternalLinkIcon size="1.5rem" />}
        {media === "file" && <PaperClipIcon size="1.5rem" />}
      </div>

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
