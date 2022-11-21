import FormAddMaterial from "../../components/AddMaterialForm";
import { Wrapper } from "./style";

import { CurrentRoute } from "../../components/CurrentRoute";

const SandboxTest = () => {
  const currentRoutesData = [
    {
      to: "#area-do-estudante",
      content: "area do estudante"
    },
    "adicionar materiais"
  ];

  return (
    <>
      <CurrentRoute routes={currentRoutesData} />

      <Wrapper>
        <FormAddMaterial />
      </Wrapper>
    </>
  );
};

export default SandboxTest;
