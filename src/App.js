import React from "react";
import { BackContainer } from "./styles/global";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./comps/Sidebar";

// Routes
import About from "./Pages/About";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  return (
    <BackContainer>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound /> } />
      </Routes>
    </BackContainer>
  );
}

export default App;
