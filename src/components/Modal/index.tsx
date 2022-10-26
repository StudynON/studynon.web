import { CheckIcon } from "../Icons";
import {
  ModalBlock,
  ModalOverlay,
  ModalContainer,
  ButtonContainer,
  LinkAddNew,
  LinkReturn,
} from "./Modal.Style";

interface IModal {
  title: string;
  subTitle: string;
  btnAddText: string;
  btnReturnText: string;
  active: boolean;
  linkToAddNew: string;
  linkToReturn: string;
}

const Modal = ({
  active,
  title,
  subTitle,
  btnAddText,
  btnReturnText,
  linkToAddNew,
  linkToReturn,
}: IModal) => {

  return (
    <>
      {active && (
        <ModalBlock>
          <ModalOverlay/>
          <ModalContainer>
            <CheckIcon stroke="#00ff00" size="5rem" />
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <ButtonContainer>
              <LinkAddNew to={linkToAddNew}>{btnAddText}</LinkAddNew>
              <LinkReturn to={linkToReturn}>{btnReturnText}</LinkReturn>
            </ButtonContainer>
          </ModalContainer>
        </ModalBlock>
      )}
    </>
  );
};

export default Modal;
