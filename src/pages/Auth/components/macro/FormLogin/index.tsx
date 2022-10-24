import {
  FormContainer,
  LabelContent,
  ButtonSubmit,
  CustomLink,
} from "../../micro/";

import {
  At,
  KeyFill
} from "../../../../../components/Icons/";

// AXIOS
const testFunction = (event: React.SyntheticEvent): void => {
  event.preventDefault();
  console.log("--- login ---");
};

export const Login = () => {
  return (
    <FormContainer
      title={"Entrar"}
      onSubmit={testFunction}
    >
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

      <ButtonSubmit value="Entrar"/>

      <hr />

      <CustomLink
        to="/forget-password"
        describe="Esqueceu a senha?"
        content="Alterar senha"
      />

      <CustomLink
        to="/register"
        describe="Não tem um conta?"
        content="Criar conta"
      />
    </FormContainer>
  );
};
