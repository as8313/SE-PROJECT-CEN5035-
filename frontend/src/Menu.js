import React from 'react';
import Navbar from './Navbar';
import './Menu.css';

function Menu({ onLogout }) {
    // Boilerplate for now. We will fetch items later.
    const stallName = "Selected Restaurant";

    return (
        <div className="menu-page">
            <Navbar onSignOut={onLogout} />
            <div className="menu-container">
                <div className="menu-header">
                    <h2>{stallName} Menu</h2>
                    <button className="back-btn">← Back to Stalls</button>
                </div>
                
                <div className="menu-grid">
                    <div className="menu-item-card placeholder">
                        <div className="item-info">
                            <h3 className="item-name">Menu Item Placeholder</h3>
                            <p className="item-desc">Description of the delicious item goes here.</p>
                            <span className="item-price">$9.99</span>
                        </div>
                        <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
