import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [state,setState]=useState(1);
    const {title,subtitle,img}=images[state];
    const next=()=>{
        console.log(state);
        setState(state===images.length-1?0:state+1)
    }
    const prev=()=>{
        console.log(state)
        setState(state===0?images.length-1:state-1)
    }

    return(
        <div className="slide">
            <div id='prev'onClick={next}><ArrowBackIosIcon></ArrowBackIosIcon></div>
            <h1 id='title'>{title}</h1>
            <img id='img'src={img} alt=""/>
            <h2 id='subtitle'>{subtitle}</h2>
            <div id='next' onClick={prev}> <ArrowForwardIosIcon></ArrowForwardIosIcon></div>
        </div>
    )
}

export default Carousel;