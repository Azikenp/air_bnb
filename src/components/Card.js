import React from "react";
import Kate from '../images/katie-zaferes.png';
// import {*} from '../images'
import Star from '../images/star.png';

export default function Main(props) {
    return(
        <div className="card">
            <div className="card--badge">SOLD OUT</div>
            <img src= {props.img} className="card--image" alt="image of participants"/>
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
