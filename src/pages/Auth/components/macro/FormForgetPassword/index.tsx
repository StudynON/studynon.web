import {
  FormContainer,
  LabelContent,
  ButtonSubmit,
  CustomLink,
} from "../../micro/";

import {
  At
} from "../../../../../components/Icons/";

// AXIOS
const testFunction = (event: React.SyntheticEvent): void => {
  event.preventDefault();
  console.log("--- forget-password ---");
};

export const ForgetPassword = () => {
  return (
    <FormContainer
      title={"Alterar senha"}
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

      <ButtonSubmit value="Enviar"/>

      <hr />

      <CustomLink
        to="/login"
        describe="Lembrou a senha?"
        content="Acessar conta"
      />
    </FormContainer>
  );
};
