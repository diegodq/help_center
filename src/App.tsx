import React, { ReactElement } from "react";
import Header from "./layout/Header";
import Search from "./layout/Search";
import Footer from "./layout/Footer";
import Articles from "./layout/Articles";
import Map from "./layout/Map";
import Form from "./layout/Form";
import Maintenance from "./layout/Maintenance";

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