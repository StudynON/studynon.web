import { CalendarIcon, ListIcon, PlusIcon, TargetArrowIcon } from "../Icons";
import { Card, CardContainer } from "./style";

const HomeCards = () => {
  const linksList = [
    {
      icon: <PlusIcon size="4rem" />,
      to: "/",
      title: "Adicionar Material",
      desc: "Adicione novos materiais de estudo e escolha em que pastas vão ficar",
    },
    {
      icon: <ListIcon size="4rem" />,
      to: "/",
      title: "Acessar Materiais",
      desc: "Veja e edite todos os materiais de estudo adicionados em sua conta",
    },
    {
      icon: <TargetArrowIcon size="4rem" />,
      to: "/",
      title: "Definir Metas",
      desc: "Adicione novas metas ao seu cronograma de estudos",
    },
    {
      icon: <CalendarIcon size="4rem" />,
      to: "/",
      title: "Ver todas as metas",
      desc: "Acesse as metas definidas por dia em seu cronograma e acompanhe o progresso diário",
    },
  ];
  return (
    <>
      <CardContainer>
        {linksList.map((item) => (
          <Card key={item.title}>
            {item.icon}
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
          </Card>
        ))}
      </CardContainer>
    </>
  );
};

export default HomeCards;
