import React, { useState } from "react";
import { BackContainer, ContentContainer } from "./styles/global";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./comps/Sidebar";
import Footer from "./comps/Footer";
import ProgressBar from "./comps/ProgressBar";

// Routes
import Sellers from "./Pages/Sellers";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";



const App = () => {

  const [progress, setProgress] = useState(0)

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target
    setProgress((scrollTop * 100) / (scrollHeight - clientHeight))
    console.log(progress);
  }
  return (
    <BackContainer>
      <Sidebar />
      <ContentContainer onScroll={handleScroll}>
        {/* <Progress scroll={progress + "%"} /> */}
        <ProgressBar progress={progress} />
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
