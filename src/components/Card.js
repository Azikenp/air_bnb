import React from "react";
import Kate from '../images/katie-zaferes.png';
// import {*} from '../images'
import Star from '../images/star.png';

export default function Main(props) {
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src= {props.item.coverImg} className="card--image" alt="image of participants"/>
            <div className="card--stats">
                <img src={Star} className="card--star" alt="star" />
                <span className="grey">{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount})  *</span>
                <span>{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price} </span>/ person</p>
        </div>
    )
}
