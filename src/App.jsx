import { Component } from "react";
import Creations from "./components/Creations";
import CreationsDesktop from "./components/CreationsDesktop";
import Session2 from './components/Session2'
import Footer from './components/Footer'
import Header from './layout/Header'
import "./scss/index.css"

const App = () => {
  return (
    <>
      <Header />
      <Session2 />
      <Creations />
      <CreationsDesktop />
      <Footer />
    </>
  );
};

export default App;
