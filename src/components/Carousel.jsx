import React, { useState } from 'react'
import "./Carousel.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function Carousel(props) {
    
const [thisPicture, setThispicture]= useState(0);
const getClassName= (i) =>{
        if(i === thisPicture) return "show";
        return ""
}

const moveToNext =()=>{
        setThispicture((thisPicture+1) % props.imageUrl.length)
    }

    const moveToPrevious =()=>{
        const Currentpicture= thisPicture-1;
        if(Currentpicture<0){
            setThispicture(props.imageUrl.length-1);
            return;
        }
        setThispicture(thisPicture-1)
    }

  return (
	<div className="image_banner">
        <div className="image_container">
            {props.imageUrl.map((pic,i)=>(
                <img key={pic} src={pic} alt="Appartement sur le Canal Saint Marin" className={getClassName(i)}></img>
            ))}
        </div>    
        <button className="btn btn-previous"onClick={moveToPrevious}>
            <FaArrowLeft className="arrow"/>
        </button>
        <span className="slide-counter">
            {thisPicture+1}/{props.imageUrl.length}
        </span>
        <button className="btn btn-next"onClick={moveToNext}>
            <FaArrowRight className="arrow"/>
        </button>  
    </div>

  )
}

export default Carousel