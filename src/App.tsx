import { ReactElement } from "react";
import Header from "./layout/header";
import Search from "./layout/search";
import Footer from "./layout/footer";
import Articles from "./layout/articles";
import Map from "./layout/map";
import Form from "./layout/form";
import Maintenance from "./layout/maintenance";

const App: React.FC = (): ReactElement => {
	const isMaintenance: boolean = import.meta.env.VITE_APP_MAINTENANCE_MODE === 'true';

	if(isMaintenance) {
		return <Maintenance />
	}

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