import React from "react";
import ApodContainer from "./components/ApodContainer/ApodContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const StyledApp = styled.div`
  background: linear-gradient(180deg, #105bd8, #061f4a);
`;

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <ApodContainer />
      <Footer />
    </StyledApp>
  );
}

export default App;
