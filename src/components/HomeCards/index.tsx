import { ReactNode } from "react";
import { CalendarIcon, ListIcon, PlusIcon, TargetArrowIcon } from "../Icons";
import { Card, CardContainer, LinkCard } from "./style";

interface ILinksHome {
  icon: ReactNode;
  to: string;
  title: string;
  description: string;
}

const HomeCards = () => {
  const linksList: ILinksHome[] = [
    {
      icon: <PlusIcon size="4rem" />,
      to: "/",
      title: "Adicionar Material",
      description:
        "Adicione novos materiais de estudo e escolha em que pastas vão ficar",
    },
    {
      icon: <ListIcon size="4rem" />,
      to: "/",
      title: "Acessar Materiais",
      description:
        "Veja e edite todos os materiais de estudo adicionados em sua conta",
    },
    {
      icon: <TargetArrowIcon size="4rem" />,
      to: "/",
      title: "Definir Metas",
      description: "Adicione novas metas ao seu cronograma de estudos",
    },
    {
      icon: <CalendarIcon size="4rem" />,
      to: "/",
      title: "Ver todas as metas",
      description:
        "Acesse as metas definidas por dia em seu cronograma e acompanhe o progresso diário",
    },
  ];
  return (
    <>
      <CardContainer>
        {linksList.map(({ icon, to, title, description }) => (
          <LinkCard to={to} key={title}>
            <Card>
              {icon}
              <h1>{title}</h1>
              <p>{description}</p>
            </Card>
          </LinkCard>
        ))}
      </CardContainer>
    </>
  );
};

export {HomeCards};
