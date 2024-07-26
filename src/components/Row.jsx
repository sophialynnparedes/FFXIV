export default function Row(props) {
  return (
    <div className={"row " + props.align} id={props.id}>
      {props.children}
    </div>
  );
}
