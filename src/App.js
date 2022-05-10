import "./App.css";
import React from "react";
import Header from "./Layout/Header";
import ProdCard from "./Layout/ProdCard";

function App() {
  return (
    <>
      <div class="container-fluid">
        <Header />
        
        <ProdCard />
      </div>
    </>
  );
}

export default App;
