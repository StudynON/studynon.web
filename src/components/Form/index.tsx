// Form Styled
import { ChangeEvent, FormEvent, useState } from "react";
import { SForm, Container, ContainerButton, ContainerDate } from "./style";
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
  const [values, setValues] = useState({
    mat_title: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <SForm onSubmit={handleSubmit}>
      <h1>Adicionar material de estudo</h1>
      <Select labelText="Tipo de mídia" />
      <Container>
        <Input
          name="mat_link"
          placeholder="Inserir link"
          labelTitle="Insira o link"
          width="412px"
        />
      </Container>
      <Input
        name="mat_title"
        labelTitle="Título"
        placeholder="Inserir título"
        value={values.mat_title}
        onChange={handleChange}
      />
      <Input
        name="mat_educ"
        labelTitle="Instituição de ensino"
        placeholder="Inserir Instituição"
      />
      <ContainerDate>
        <Input
          name="mat_date"
          labelTitle="Data limite de acesso"
          type="date"
          width="145px"
        />
        <Checkbox />
      </ContainerDate>
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
