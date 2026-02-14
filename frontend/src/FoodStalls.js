import React from 'react';
import Navbar from './Navbar';
import './FoodStalls.css';

import starbucks from './assets/starbucks.jpg';
import burger352 from './assets/Burger352.jpeg';
import panda from './assets/panda.png';
import subway from './assets/subway.jpeg';
import halal from './assets/halal.png';
import babasPizza from "./assets/baba's pizza.jpeg";

const stalls = [
    { name: 'Starbucks', image: starbucks, color: '#0D7377' },
    { name: 'Burger 352', image: burger352, color: '#FFA500' },
    { name: 'Panda Express', image: panda, color: '#FF0000' },
    { name: 'Subway', image: subway, color: '#5F8D4E' },
    { name: 'Halal Shack', image: halal, color: '#FEFFDE' },
    { name: "Baba's Pizza", image: babasPizza, color: '#FFD4D4' },
];

function FoodStalls({ onLogout }) {
    return (
        <div className="foodstalls-page">
            <Navbar onSignOut={onLogout} />
            <h2 className="stalls-heading">Explore Food Stalls</h2>
            <div className="stalls-grid">
                {stalls.map((stall, index) => (
                    <div className="stall-card" key={index}>
                        <div
                            className="stall-color-bar"
                            style={{ background: stall.color }}
                        />
                        <img src={stall.image} alt={stall.name} />
                        <p className="stall-name">{stall.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FoodStalls;
