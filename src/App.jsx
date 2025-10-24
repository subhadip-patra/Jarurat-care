import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Patients from "./pages/Patient";
import About from "./pages/About";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // Simple state for page switching

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar onNavigate={navigate} />
      {currentPage === "home" && <Home onNavigate={navigate} />}
      {currentPage === "patients" && <Patients />}
      {currentPage === "about" && <About />}
    </>
  );
}

export default App;
