import type { IRouteProps } from "../../interfaces";

import { CustomLink } from "./style";

interface IRouteLinkProps {
  data: IRouteProps;
}

export function RouteLink({ data }: IRouteLinkProps): JSX.Element {
  const firstLetterToUpperCase = (content: string): string => {
    const firstLetter = content[0].toUpperCase();
    const otherLetters = content.toLowerCase().slice(1);
    const formatedContent = `${firstLetter}${otherLetters}`;
    return formatedContent;
  };

  let to: string;
  let content: string;

  if (typeof data === "string") {
    to = "#";
    content = firstLetterToUpperCase(data);
  } else {
    to = data.to;
    content = firstLetterToUpperCase(data.content);
  }

  return (
    <CustomLink to={to}>
      {content}
    </CustomLink>
  );
}
