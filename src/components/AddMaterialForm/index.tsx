import { FormEvent, useState } from "react";

// Styles
import { SForm, SDateContainer, SBtnContainer } from "./style";

// Components
import Button from "./ui/Button/Button";
import Checkbox from "./ui/Checkbox/Checkbox";
import Input from "./ui/Input/Input";
import Select from "./ui/Select/Select";

const FormAddMaterial = () => {
  // Primeiro select com o tipo de material cadastrado
  const optionMidia = [
    { id: 1, value: "videoAula", text: "Vídeo Aula" },
    { id: 2, value: "link", text: "Link" },
    { id: 3, value: "arquivo", text: "Arquivo" },
  ];
  // Mock data para as pastas
  const optionPastas = [
    { id: 1, value: "direitoAdm", text: "Direito Administrativo" },
    { id: 2, value: "direitoConst", text: "Direito Constitucional" },
    { id: 3, value: "legislacao", text: "Legislação" },
  ];

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    console.log(`
      Midia ${data.midia},
      Link ${data.link},
      Titulo ${data.titulo},
      Escola ${data.escola},
      Data Acesso ${data.dataAcesso},
      Pastas ${data.pastas},
      Acesso Vitalício ${isChecked}
      `);

    console.log(data);
  };

  return (
    <SForm onSubmit={handleSubmit}>
      <Select name="midia" labelText="Tipo de mídia" required>
        <option value="" hidden>
          Tipo de Mídia
        </option>
        {optionMidia.map((opt) => (
          <option key={opt.id} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </Select>
      <Input
        type="text"
        name="link"
        labelText="Insira o link"
        placeholder="Inserir link "
        required
      />
      <Input
        type="text"
        name="titulo"
        labelText="Título"
        placeholder="Inserir título"
        required
      />
      <SDateContainer>
        <Input
          type="date"
          name="dataAcesso"
          labelText="Data limite de acesso"
          disabled={isChecked}
          required
        />
        <Checkbox onChange={handleCheckbox} />
      </SDateContainer>
      <Select name="pastas" labelText="Adicionar a" required>
        <option value="" hidden>
          Escolha uma pasta
        </option>
        {optionPastas.map((opt) => (
          <option key={opt.id} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </Select>
      <SBtnContainer>
        <Button isCancelVariant={false}>Concluído</Button>
        <Button isCancelVariant={true}>Cancelar</Button>
      </SBtnContainer>
    </SForm>
  );
};

export default FormAddMaterial;
