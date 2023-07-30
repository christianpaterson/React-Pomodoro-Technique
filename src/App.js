import React, { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import TomatoBox from "./TomatoBox";
import "./App.css";
import ButtonDaysContainer from "./ButtonDaysContainer";
import DaysContainer from "./DaysContainer";

export default function App() {
  const [tomatoes, setTomatoes] = useState("");
  const [selectedDay, setSelectedDay] = useState("M");
  const [allTomatoes, setAllTomatoes] = useState({});

  return (
    <div className="App">
      <div className="window">
        <h2>Coding Hours Counter</h2>
        <DaysContainer 
          allTomatoProp={allTomatoes} setAllTomatoes={setAllTomatoes}
          selectedDayProp={selectedDay} setSelectedDay={setSelectedDay} />
        <ButtonDaysContainer 
          allTomatoProp={allTomatoes} setAllTomatoes={setAllTomatoes}
          selectedDayProp={selectedDay} setSelectedDay={setSelectedDay} />
        <h2>Fun Hours Counter</h2>
        <TomatoBox tomatoProp={tomatoes} />
        <ButtonContainer tomatoProp={tomatoes} setTomatoes={setTomatoes} />
      </div>
    </div>
  );
}