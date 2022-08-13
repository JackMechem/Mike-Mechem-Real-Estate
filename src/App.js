import React from "react";
import Colors from "./styles/colors";
import { Back_Container } from "./styles/global";
import { Routes, Route, Link } from "react-router-dom";

// Routes
import About from "./Pages/About";
import Home from "./Pages/Home";
import Page_Not_Found from "./Pages/Page_Not_Found";

const App = () => {
  return (
    <Back_Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Page_Not_Found /> } />
      </Routes>
    </Back_Container>
  );
}

export default App;
