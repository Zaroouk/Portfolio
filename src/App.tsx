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
      <HomePage />
      {/* <FooterComponent /> */}
</div>
  );
}

export default App;
