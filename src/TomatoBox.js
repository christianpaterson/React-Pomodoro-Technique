export default function TomatoBox(props) {
  return (
    <div className="tomato-box">
      <h2>{props.tomatoProp ? props.tomatoProp : "No Tomatoes"}</h2>
    </div>
  );
}