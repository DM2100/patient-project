import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { PatientSection } from "./components/PatientDataSection";


function App() {
  return (
    <div className="App">
      <NavBar />
      <PatientSection />

    </div>
  );
}

export default App;
