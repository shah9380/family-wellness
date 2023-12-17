import './Header.css';
// import React, { useRef } from "react";

const Header = (props)=>{
    // const section1 = useRef();
    // const section2 = useRef();
    // const section3 = useRef();
    // const scroller = (elemRef)=>{
    //     console.log(elemRef);
    // }
    return(
        <div className="Header-Box">
            <div>
                <h1>{props.companyName}</h1>
                <small>MASSAGE THERAPY</small>
            </div>
            <nav>
                <ul className="navbar">
                    <li className="active">HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>FAQ</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;