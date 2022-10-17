import { NextUIProvider } from "@nextui-org/react";
import { useState } from "react";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
      <div className='app'>
      {/* <NavBar /> */}
      {/* //!make it fully responsive */}
      {/* //? themes are ok */}
      {/* //* look for a good font */}
      <HomePage />
      {/* <FooterComponent /> */}
</div>
  );
}

export default App;
