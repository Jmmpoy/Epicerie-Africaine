import React from "react";
import Header from "./components/header";
import Contact from "./components/contact";
import Products from "./components/products";
import Avis from "./components/avis";
import "./assets/style/commons.scss";
import "./assets/style/app.scss";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <div className="App">
      <Header />
      <Fade>
        <Products />
        <Avis />
        <Contact />
      </Fade>
    </div>
  );
}

export default App;
