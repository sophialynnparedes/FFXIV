import Row from "./Row";
import Col from "./Col";
import { Link } from "wouter";

export default function Navbar(props){
    return(
        <Row justify="center" id="navbar">
            <Col width="55%" align="center" justify="center"><h1 id="title">Chapter 1: An Auspcious Meeting</h1></Col>
            <Col width="15%" align="center"><h1 id="title">Story</h1></Col>
            <Col width="15%" align="center"><Link href="/party"><h1 id="title" >Party</h1></Link></Col>
            <Col width="15%" align="center"><h1 id="title">Enemies</h1></Col>
            
        </Row>
    )
}