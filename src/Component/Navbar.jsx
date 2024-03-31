// import React from 'react';

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/"><button className="home">Home</button></Link>
            <Link to="/user"><button className="home">User</button></Link>
        </div>
    );
};

export default Navbar;