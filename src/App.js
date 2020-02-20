import React from "react";
import ApodContainer from "./components/ApodContainer/ApodContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ApodContainer />
      <Footer />
    </div>
  );
}

export default App;
