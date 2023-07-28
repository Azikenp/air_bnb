import React from "react";
import Kate from '../images/katie-zaferes.png';
import Star from '../images/star.png';

export default function Main() {
    return(
        <div className="card">
            <img src={Kate} className="card--image" alt="kate" />
            <div className="card--stats">
                <img src={Star} className="card--star" alt="star" />
                <span className="grey">5.0</span>
                <span className="grey">(6) *</span>
                <span>USA</span>
            </div>
            <p>Life lessons with Katie Zafares</p>
            <p><span className="bold">From $136 </span>/ person</p>
        </div>
    )
}