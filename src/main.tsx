// 1. Import `createTheme`
import { NextUIProvider, createTheme, Switch, Button } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavBar from "./components/NavBar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <NextUIProvider>
    {/* <NavBar /> */}
    <App />
  </NextUIProvider>
);
