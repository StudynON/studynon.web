import { CheckIcon } from "../Icons";
import {
  ModalBlock,
  ModalOverlay,
  ModalContainer,
  ButtonContainer,
  ButtonAddNew,
  ButtonReturn,
} from "./Modal.Style";

interface IModal {
  title: string;
  subTitle: string;
  btnAddText: string;
  btnReturnText: string;
  active: boolean;
  hideModal: () => void;
}

const Modal = ({
  active,
  title,
  subTitle,
  btnAddText,
  btnReturnText,
  hideModal,
}: IModal) => {
  
  /*
   *  Como usar o modal:
   *  Adicionar um estado 'active' no componente pai
   *  com valor padrão false, assim mantém o modal fechado
   *  para abrir basta trocar o estado para true
   */

  const handleHideModal = () => {
    hideModal();
  };

  return (
    <>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={handleHideModal} />
          <ModalContainer>
            <CheckIcon stroke="#00ff00" size="5rem" />
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <ButtonContainer>
              <ButtonAddNew href="">{btnAddText}</ButtonAddNew>
              <ButtonReturn href="">{btnReturnText}</ButtonReturn>
            </ButtonContainer>
          </ModalContainer>
        </ModalBlock>
      )}
    </>
  );
};

export default Modal;
