import React from 'react';
import { Link } from "react-router-dom";


const Menu = (props)  => (
    <nav id='menu'>
        <Link to='/'>
            Usuarios
        </Link>
        <Link to='/job'>
            Job
        </Link>
    </nav>
  
);


export default Menu;