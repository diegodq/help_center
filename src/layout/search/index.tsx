import { ReactElement } from "react";
import { SearchArea, Div, TitleArea } from "./styles";
import InputSearch from "../../components/search";

const Search: React.FC = (): ReactElement => {
  return (
    <SearchArea>
      <Div>
        <TitleArea>Como podemos ajudar você?</TitleArea>
        <InputSearch />
      </Div>
    </SearchArea>
  )
}

export default Search;