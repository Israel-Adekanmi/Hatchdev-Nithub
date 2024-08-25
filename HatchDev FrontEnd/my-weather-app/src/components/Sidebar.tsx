import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/weather">Weather</Link>
            <Link to="/cities">Cities</Link>
            <Link to="/map">Map</Link>
            <Link to="/settings">Settings</Link>
        </div>
    );
};

export default Sidebar;
