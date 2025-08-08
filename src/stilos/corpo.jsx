import React,{useState, useEffect, useRef} from 'react'
import './Style.css'
import Logo from '../fotos/logo.png'
import Script from './script'

const Navbar = (props) => {
// eslint-disable-next-line
const [opened,setOpen] = useState(false)
 const open = ()=>{
      if(opened == false){
         setOpen(true)
        let tela = document.getElementById('tela')
        return tela.style.right = '0px'
      }else{
        setOpen(false)
        let tela = document.getElementById('tela')
        return tela.style.right = '-600px'
      }
       
    }
  return (
    <>
    <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
    </head>
    <body >
      <nav id="topnav" className='#'>
        <img id="logo" src={Logo} alt="logo" />
        {/* Os links de navegação agrupados em uma div com a classe "nav-links" */}
        <div className="nav-links">
        <p id='service' href="#">Service</p>
        <p id='support' href="#">Support</p>
        <p id='about' href="#">About</p>
        <p id='demo' href="#">Demo</p>
        <p id='why' href="#">Why NexosFlow</p>
        </div>
        <div id="buttons">
        <button id="store">Get Access</button>
        <button id="login">Login</button>
        <button id="sing" >Sign In</button>
        </div>
        <Script func = {open} />
      </nav>
    </body>
    </>
  );
};

export default Navbar;
