import {
  FormContainer,
  LabelContent,
  ButtonSubmit,
  CustomLink,
} from "../../micro/";

import {
  At,
  PersonCircle,
  KeyFill
} from "../../../../../components/Icons/";

// AXIOS
const testFunction = (event: React.SyntheticEvent): void => {
  event.preventDefault();
  console.log("--- register ---");
};

export const Register = () => {
  return (
    <FormContainer
      title={"Registrar"}
      onSubmit={testFunction}
    >
      <LabelContent
        id={"name"}
        describe={"Nome"}
        input={{
          type: "name",
          name: "name",
          placeholder: "Digite seu nome",
          required: true,
        }}>
        <PersonCircle />
      </LabelContent>

      <LabelContent
        id={"email"}
        describe={"E-mail"}
        input={{
          type: "email",
          name: "email",
          placeholder: "Digite seu email",
          required: true,
        }}>
        <At />
      </LabelContent>

      <LabelContent
        id={"password"}
        describe={"Senha"}
        input={{
          type: "password",
          name: "password",
          placeholder: "Digite sua senha",
          required: true,
          minLength: 6,
        }}>
        <KeyFill />
      </LabelContent>

      <LabelContent
        id={"confirm-password"}
        describe={"Confirmar senha"}
        input={{
          type: "password",
          name: "confirm-password",
          placeholder: "Digite sua senha novamente",
          required: true,
          minLength: 6,
        }}>
        <KeyFill />
      </LabelContent>

      <ButtonSubmit value="Cadastrar"/>

      <hr />

      <CustomLink
        to="/login"
        describe="Já tem um conta?"
        content="Acesse"
      />
    </FormContainer>
  );
};
