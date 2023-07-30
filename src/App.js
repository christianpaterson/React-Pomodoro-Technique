import React, { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import TomatoBox from "./TomatoBox";
import "./App.css";

export default function App() {
  const [tomatoes, setTomatoes] = useState("");

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        <TomatoBox tomatoProp={tomatoes} />
        <ButtonContainer setTomatoes={setTomatoes} tomatoProp={tomatoes} />
      </div>
    </div>
  );
}