// Form Styled
import { SForm, Container, ContainerButton } from "./style";
// Components
import Button from "./ui/Button/Button";
import Checkbox from "./ui/Checkbox/Checkbox";
import Input from "./ui/Input/Input";
import Select from "./ui/Select/Select";

// Mock data
const data = [
  {
    id: 1,
    name: "Direito Administrativo",
  },
  {
    id: 2,
    name: "Direito Constitucional",
  },
  {
    id: 3,
    name: "Legislação",
  },
];

const Form = () => {
  return (
    <SForm>
      <h1>Adicionar material de estudo</h1>
      <Select labelText="Tipo de mídia" />
      <Container>
        <Input placeholder="Inserir link" labelTitle="Insira o link" width="412px"/>
        <Input type="file" labelTitle="ou faça o upload" />
      </Container>
      <Input labelTitle="Título" placeholder="Inserir título" />
      <Input
        labelTitle="Instituição de ensino"
        placeholder="Inserir Instituição"
      />
      <Container>
        <Input labelTitle="Data limite de acesso" type="date" width="300px" />
        <Checkbox />
      </Container>
      <Select labelText="Adicionar a">
        <option value="" hidden>
          Escolha a pasta
        </option>
        {data.map((pasta) => (
          <option key={pasta.id}>{pasta.name}</option>
        ))}
      </Select>
      <ContainerButton>
        <Button isCancelVariant={false}>Conluir</Button>
        <Button isCancelVariant={true}>Cancelar</Button>
      </ContainerButton>
    </SForm>
  );
};

export default Form;
