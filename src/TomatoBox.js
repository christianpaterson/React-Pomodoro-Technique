export default function TomatoBox(props) {
  return (
    <div className="tomato-box">
      <h1>{props.tomatoProp ? props.tomatoProp : "No Tomatoes"}</h1>
    </div>
  );
}