import React, { ReactElement } from "react";
import { Container, InputSearchField, MdOutlineSearchIcon } from "./styles";


const InputSearch: React.FC = (): ReactElement => {
  return (
    <Container>
      <MdOutlineSearchIcon />
      <InputSearchField type="text" id="search" name="search" placeholder="Busque sua palavra-chave aqui." />
    </Container>
  )
}

export default InputSearch;