export default function Row(props) {
  return (
    <div className="row" id={props.id} style={{justifyContent: props.justify, alignItems: props.align}}>
      {props.children}
    </div>
  );
}
