import React from 'react';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';
 
export default function App() {
  return (
    <div>
      <Navbar />
      <Card img = 'katie-zaferes.png' ratings = "5.0" reviewCount = {6} country = "USA" title = "Life lessons with Katie" price = {136} />
    </div>
  )
}

