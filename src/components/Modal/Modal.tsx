import { CheckIcon } from "../Icons";
import {
  ModalContainer,
  ButtonContainer,
  ButtonAddNew,
  ButtonReturn,
} from "./Modal.Style";

interface IModal {
  modalTitle: string;
  modalSubTitle: string;
  modalBtnAddText: string;
  modalBtnReturnText: string;
}

const Modal = (props: IModal) => {
  return (
    <ModalContainer>
      <CheckIcon color="#161515" size="3.8rem" />
      <h1>{props.modalTitle}</h1>
      <p>{props.modalSubTitle}</p>
      <ButtonContainer>
        <ButtonAddNew href="">{props.modalBtnAddText}</ButtonAddNew>
        <ButtonReturn href="">{props.modalBtnReturnText}</ButtonReturn>
      </ButtonContainer>
    </ModalContainer>
  );
};

export default Modal;
