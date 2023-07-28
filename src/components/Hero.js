import React from "react";
import Hero from '../images/photo-grid.png';

export default function Main() {
    return(
        <section>
            <img className="hero--photo" src={Hero} alt="hero"/>
            <h1 className="hero--header">Online experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}