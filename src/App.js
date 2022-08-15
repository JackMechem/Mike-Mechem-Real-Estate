import React from "react";
import { BackContainer, ContentContainer, Footer } from "./styles/global";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./comps/Sidebar";

// Routes
import Sellers from "./Pages/Sellers";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  return (
    <BackContainer>
      <Sidebar />
      <ContentContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </ContentContainer>
    </BackContainer>
  );
}

export default App;
