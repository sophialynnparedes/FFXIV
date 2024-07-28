
export default function Col (props) {
    return(<div className={"col"} id={props.id} style={{width: props.width, justifyContent: props.justify, alignItems: props.align}}>
        {props.children}
    </div>)
}