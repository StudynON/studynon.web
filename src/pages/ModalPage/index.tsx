import { useCallback, useState } from "react";
import Modal from "../../components/Modal";
import { Wrapper } from "./style";

const ModalPage = () => {
  const [active, setActive] = useState(false);

  const handleModal = useCallback(() => setActive((curr) => !curr), []);

  return (
    <Wrapper>
      <button onClick={handleModal}>Abrir Modal</button>

      <Modal
        title="Meta adicionada com sucesso"
        subTitle="Em instantes você poderá ver as atualizações em seu calendário"
        btnAddText="Adicionar nova meta"
        btnReturnText="Retornar ao Cronograma"
        active={active}
        linkToAddNew="/modalpage"
        linkToReturn="/"
      />
    </Wrapper>
  );
};

export default ModalPage;
