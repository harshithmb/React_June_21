import React from "react"; // imr
//Components
import Topbar from "./components/Topbar";
import Banner from "./components/Banner";
import PlacesGrid from "./components/PlacesGrid";
import Footer from "./components/Footer";
import Products from "./components/Products";

const App = () => {
  // sfc
  return (
    <>
      <Topbar />
      <Banner />
      <hr />
      <Products />
      <Footer />
    </>
  );
};

export default App;
