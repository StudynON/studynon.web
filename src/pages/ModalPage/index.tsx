import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { Wrapper } from "./style";

const ModalPage = () => {
  const [active, setActive] = useState(false);

  return (
    <Wrapper>
      <button onClick={() => setActive(true)}>Abrir Modal</button>

      <Modal
        title="Meta adicionada com sucesso"
        subTitle="Em instantes você poderá ver as atualizações em seu calendário"
        btnAddText="Adicionar nova meta"
        btnReturnText="Retornar ao Cronograma"
        active={active}
        linkToAddNew='/modalpage'
        linkToReturn='/'
      />
    </Wrapper>
  );
};

export default ModalPage;
