import { ReactElement } from "react";
import Header from "./layout/header";
import Search from "./layout/search";
import Footer from "./layout/footer";
import Articles from "./layout/articles";
import Map from "./layout/map";
import Form from "./layout/form";

const App: React.FC = (): ReactElement => {
  return (
    <>
      <Header />
      <Search />
      <Articles />
      <Map />
      <Form />
      <Footer />
    </>
  )
}

export default App;