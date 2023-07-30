const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];


export default function DaysContainer({tomatoProp, setTomatoes, allTomatoProp, setAllTomatoes, selectedDayProp, setSelectedDay}) {
  return (
    <>
      {days.map((day) => (
      <div 
        onClick={() => setSelectedDay(day)}
        style={selectedDayProp === day ? {color: 'black'} : {}}
        key={day} 
        className="tomato-box">
        <h3>{day}</h3>
        <div className="tomato-day-box">
          {allTomatoProp[day]}
        </div>
      </div>
      ))}
    </>
  );
}