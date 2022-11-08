//import axios from "axios";
import { FormEvent, useState, useRef, useCallback } from "react";

import { SForm, SDateContainer, SBtnContainer } from "./style";

import Button from "./ui/Button/Button";
import Checkbox from "./ui/Checkbox/Checkbox";
import Input from "./ui/Input/Input";
import Select from "./ui/Select/Select";

const FormAddMaterial = () => {
  // Primeiro select com o tipo de material cadastrado
  const optionMedia = [
    { id: 1, value: "videoAula", text: "Vídeo Aula" },
    { id: 2, value: "link", text: "Link" },
  ];
  // Mock data para as pastas
  const optCategories = [
    { id: 1, value: "direitoAdm", text: "Direito Administrativo" },
    { id: 2, value: "direitoConst", text: "Direito Constitucional" },
    { id: 3, value: "legislacao", text: "Legislação" },
  ];

  const formRef = useRef<HTMLFormElement>(null);

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckbox = useCallback(() => setIsChecked((prev) => !prev), []);

  const handleCancel = useCallback(() => formRef?.current?.reset(), []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.title) {
      return;
    }
    // Método post, deixarei comentado
    // substituir API pelo endpoint correto qdo estiver disponível
    // try {
    //   axios.post('API',{
    //     media: ${data.media},
    //     link: ${data.link},
    //     title: ${data.title},
    //     school: ${data.school},
    //     deadline: ${data.deadline},
    //     category: ${data.category},
    //     lifetime_access: ${isChecked}
    //   })
    //   alert('Material adicionado com sucesso')
    // } catch (error) {
    //   alert(`Erro ao adicionar material - ${error}`)
    // }

    console.log(`
      Dados do formulário:
        media: ${data.media}
        Link: ${data.link}
        title: ${data.title}
        school: ${data.school}
        deadline: ${data.deadline}
        category: ${data.category}
        lifetime_access: ${isChecked}
    `);
    formRef?.current?.reset();
  }, []);

  return (
    <SForm ref={formRef} onSubmit={handleSubmit}>
      <Select name="media" labelText="Tipo de mídia" required>
        <option value="" hidden>
          Tipo de Mídia
        </option>
        {optionMedia.map((opt) => (
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
        name="title"
        labelText="Título"
        placeholder="Inserir título"
        required
      />
      <Input
        type="text"
        name="school"
        labelText="Instituição de ensino"
        placeholder="Inserir instituição"
        required
      />
      <SDateContainer>
        <Input
          type="date"
          name="deadline"
          labelText="Data limite de acesso"
          disabled={isChecked}
          required
        />
        <Checkbox onChange={handleCheckbox} />
      </SDateContainer>
      <Select name="category" labelText="Adicionar a" required>
        <option value="" hidden>
          Escolha uma pasta
        </option>
        {optCategories.map((category) => (
          <option key={category.id} value={category.value}>
            {category.text}
          </option>
        ))}
      </Select>
      <SBtnContainer>
        <Button isCancelVariant={false}>Concluído</Button>
        <Button isCancelVariant={true} onClick={handleCancel}>
          Cancelar
        </Button>
      </SBtnContainer>
    </SForm>
  );
};

export default FormAddMaterial;
