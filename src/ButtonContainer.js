export default function ButtonContainer(props) {
  return (
    <div className="buttons-container">
    <div onClick={() => props.setTomatoes(props.tomatoProp.slice(0, -2))} className="button">
      -
    </div>
    <div onClick={() => props.setTomatoes(props.tomatoProp + "🍅")} className="button">
      +
    </div>
  </div>
  );
}