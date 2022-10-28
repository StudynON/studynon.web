import { Container, ListItem, CustomLink } from "./style";
import {
  StudentIcon,
  CalendarIcon,
  BookIcon,
  PersonIcon,
  SettingsIcon,
} from "../../../Icons";

interface IMenu {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavLinks = () => {
  const menuList: IMenu[] = [
    {
      icon: <StudentIcon color="#0007AE" size="1.5rem" />,
      to: "/",
      label: "Área do estudante",
    },
    {
      icon: <CalendarIcon color="#0007AE" size="1.5rem" />,
      to: "/",
      label: "Cronograma de Metas",
    },
    {
      icon: <BookIcon color="#0007AE" size="1.5rem" />,
      to: "/",
      label: "Material de estudo",
    },
    {
      icon: <PersonIcon color="#0007AE" size="1.5rem" />,
      to: "/",
      label: "Perfil",
    },
    {
      icon: <SettingsIcon color="#0007AE" size="1.5rem" />,
      to: "/",
      label: "Configurações",
    },
  ];

  return (
    <Container>
      <ul>
        {menuList.map(({ icon, label, to }: IMenu) => (
          <ListItem key={label}>
            <CustomLink to={to}>
              {icon}
              <span>{label}</span>
            </CustomLink>
          </ListItem>
        ))}
      </ul>
    </Container>
  );
};

export { NavLinks };
