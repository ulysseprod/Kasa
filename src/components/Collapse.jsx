import React, {useState} from "react";
import "../styles/Collapse.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export function Collapse(props){
    const [isContentShown, SetIsContentShown]= useState(false);
    const showContent = () =>{
        SetIsContentShown(!isContentShown);
    };

    
    const contentClass= (isContentShown ? " visible":" hidden") + " description_content";
    const chevronClass= (isContentShown ? <FaChevronDown className="chevron"/> : <FaChevronUp className="chevron"/>)

    return (
        <div className="description_section">
            <p className="description_header" onClick={showContent}>
                <span>{props.title}</span> 
                {chevronClass}
            </p>
            <p className={contentClass}>{props.content}</p>
        </div>
    );
}

export default Collapse