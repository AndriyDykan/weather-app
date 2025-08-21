import Header from "./Header/Header";
import Card from "./Card/Card";
import React,{useState} from "react";
import { CityProvider } from "./CityContext";
function App() {


  return (
    <CityProvider>
      <Header/>
      <Card/>
      
    </CityProvider>
  );
}

export default App;
