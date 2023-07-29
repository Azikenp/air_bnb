import React from "react";
// import Kate from '../images/katie-zaferes.png';
import Star from '../images/star.png';

export default function Main(props) {
    return(
        <div className="card">
            <img src = {`../images/${props.img}`} className="card--image" alt="kate" />
            <div className="card--stats">
                <img src={Star} className="card--star" alt="star" />
                <span className="grey">{props.ratings}</span>
                <span className="grey">({props.reviewCount})  *</span>
                <span>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.title} </span>/ person</p>
        </div>
    )
}