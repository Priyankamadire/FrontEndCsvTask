import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FileUpload from "./components/FileUpload";
import FormComponent from "./components/FormComponent";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./App.css";
import Home from "./components/Home";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uploadData" element={<FileUpload />} />
          <Route path="/getdetail" element={<FormComponent />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
