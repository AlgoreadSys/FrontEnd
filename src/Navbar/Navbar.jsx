import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='header' >
      <h1 className="logo">AlgoRead</h1>

    <nav className="nagivation-navbar"> 
       <a href='#' className='nav-home'>Home</a>
       <a href="/login" className="nav-button">Entrar</a>
       <a href="/cadastro" className="nav-button">Cadastre-se</a>
    </nav>
       

        
      
    
       
       
       </header>
      
   
  );
};

export default Navbar;
