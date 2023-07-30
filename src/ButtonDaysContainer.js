export default function ButtonDaysContainer({tomatoProp, setTomatoes, allTomatoProp, setAllTomatoes, selectedDayProp, setSelectedDay}) {
  return (
    <div className="buttons-container">
      <div onClick={() => setAllTomatoes({
        ...allTomatoProp, 
        [selectedDayProp]: `${(allTomatoProp[selectedDayProp]).slice(0, -2)}`})}
        className="button"
      >
        -
      </div>
      <div onClick={() => setAllTomatoes({
        ...allTomatoProp, 
        [selectedDayProp]: `${allTomatoProp[selectedDayProp] 
          ? allTomatoProp[selectedDayProp] 
          : ""}🍅`})}
        className="button"
      >
        +
      </div>
    </div>
  );
}