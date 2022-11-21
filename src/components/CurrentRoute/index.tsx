import * as Styled from "./style";
import { ICurrentRouteProps, IRouteProps } from "./interfaces";

import * as Icons from "../Icons";
import { GoBack, RouteLink } from "./components";

export function CurrentRoute({ routes }: ICurrentRouteProps): JSX.Element {
  const needIcon = (length: number, index: number): boolean => {
    return (length > 1 && index < length - 1);
  };

  const renderLink = (data: IRouteProps, index: number, arr: Array<IRouteProps>): JSX.Element => {
    return (
      <span key={`${data}-index`}>
        <RouteLink data={data} />
        {needIcon(arr.length, index) && <Icons.ArrowRight color="gray" size=".65rem" />}
      </span>
    );
  };

  return (
    <Styled.navigation>
      <Styled.previous>
        <GoBack>
          <Icons.ArrowPrevious /> voltar
        </GoBack>
      </Styled.previous>

      <Styled.currentRoute>
        {routes.map(renderLink)}
      </Styled.currentRoute>
    </Styled.navigation>
  );
}
