import React from 'react';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';
import data from './data';
 
export default function App() {
  const cards = data.map(item =>{
    return(
      <Card 
        key={item.id}
        img = {item.coverImg}
        ratings = {item.stats.rating} 
        reviewCount = {item.stats.reviewCount} 
        country = {item.location} 
        title = {item.title} 
        price = {item.price} 
      />
    )
  })
  return (
    <div>
      <Navbar />
      <section className='cards--list'>
        {cards}
      </section>
    </div>
  )
}

