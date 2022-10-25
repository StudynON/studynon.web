import { Util, Link } from "./style";

interface ICustomLinkProps {
  to: string;
  content: string;
  describe: string;
}

export function CustomLink(props: ICustomLinkProps) {
  return (
    <Util>
      {props.describe}

      <Link to={props.to}>
        {props.content}
      </Link>
    </Util>
  );
}
