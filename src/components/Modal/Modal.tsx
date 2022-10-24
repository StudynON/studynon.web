import styled from "styled-components";
import { CheckIcon } from "../Icons";

const Modal = () => {
  return (
    <ModalContainer>
      <CheckIcon color="#161515" size="3.8rem" />
      <h1>META ADICIONADA COM SUCESSO</h1>
      <p>Em instantes você poderá ver as atualizações em seu calendário</p>
      <ButtonContainer>
        <Button href=""> ADICIONAR NOVA META</Button>
        <Button href="">RETORNAR AO CRONOGRAMA</Button>
      </ButtonContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  max-width: 48rem;
  min-width: 18rem;
  width: 100%;

  max-height: 420px;
  height: 100%;

  text-align: center;

  margin: 0 auto;

  padding-block: 3.75rem;

  border: 1px solid orange;
  border-radius: 1.25rem;

  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.125rem;
    font-weight: 600;
    color: ${(props) => props.theme.dark};

    margin-top: 2.5rem;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => props.theme.gray};

    margin-top: 1.375rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 3.125rem;

  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Button = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: ${(props) => props.theme.white};

  padding: 1rem;

  border-radius: 0.5rem;

  background-color: ${(props) => props.theme.darkBlue};
`;

export default Modal;
