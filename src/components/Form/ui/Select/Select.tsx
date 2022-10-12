import { ReactNode } from "react";
import { SelectContainer, SelectLabel, SelectStyle } from "./Select.Style";

interface SelectProps {
  children?: ReactNode[];
  labelText: string;
}

const Select = ({ children, labelText }: SelectProps) => {
  return (
    <>
      <SelectContainer>
        <SelectLabel>{labelText}</SelectLabel>
        <SelectStyle>
          {!children ? (
            <>
              <option value="" hidden>
                Tipo de mídia
              </option>
              <option value="">Vídeo aula</option>
              <option value="">Link</option>
              <option value="">Arquivo</option>
            </>
          ) : (
            children
          )}
        </SelectStyle>
      </SelectContainer>
    </>
  );
};

export default Select;
