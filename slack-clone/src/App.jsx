import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
