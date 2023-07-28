import React from "react";
import Hero from '../images/photo-grid.png';

export default function Main() {
    return(
        <section>
            <img className="hero--image" src={Hero} alt="hero"/>
            <h1>Online experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}