import React from "react"; // imr
//Components
import Topbar from "./components/Topbar";
import PlacesGrid from "./components/PlacesGrid";
import Footer from "./components/Footer";
import Products from "./components/Products";

const App = () => {
  // sfc
  return (
    <>
      {/* <Topbar username="Sachin" flag={true} data={[]} /> */}
      <Products />
      <Footer />
    </>
  );
};

export default App;
