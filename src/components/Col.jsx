
export default function Col (props) {
    return(<div className={"col " + props.className} id={props.id} style={{width: props.width, justifyContent: props.justify, alignItems: props.align}}>
        {props.children}
    </div>)
}