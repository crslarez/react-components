import { Component } from "react";
import Creations from "./components/Creations";
import CreationsDesktop from "./components/CreationsDesktop";
import Session2 from './components/Session2'
import Footer from './components/Footer'
import "./scss/index.css"


const App = () => {
  return (
    <>
      <Session2 />
      <Creations />
      <CreationsDesktop />
      <Footer />
    </>
  );
};

export default App;
