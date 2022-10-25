import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { Wrapper } from "./style";

const ModalPage = () => {
  const [active, setActive] = useState(false);

  return (
    <Wrapper>
      <button onClick={() => setActive(true)}>Abrir Modal</button>

      {/* <Modal
        title="Material Adicionado Com Sucesso"
        subTitle="Em instantes você poderá ver as atualizações em suas pastas"
        btnAddText="Adicionar Novo Material"
        btnReturnText="Retornar Aos Materiais"
        active={active}
        hideModal={() => setActive(false)}
      /> */}

      <Modal
        title="Meta adicionada com sucesso"
        subTitle="Em instantes você poderá ver as atualizações em seu calendário"
        btnAddText="Adicionar nova meta"
        btnReturnText="Retornar ao Cronograma"
        active={active}
        hideModal={() => setActive(false)}
      />
    </Wrapper>
  );
};

export default ModalPage;
