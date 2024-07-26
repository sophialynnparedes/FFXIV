
export default function Row(props){
    return (
        <div className={"row " + props.align}>
            {props.children}
        </div>
    )
}