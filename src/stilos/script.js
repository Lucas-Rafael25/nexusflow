import React,{useRef} from 'react'
import './Style.css'

export default function Verificador(props){
    if(window.innerWidth <= 768){
        
        return (
        <div id='fold' className='#'>
            <button id='menu' className='#' onClick={props.func}><span class='material-icons'>menu</span></button>
            <div id='tela' className='#' >
                <p id='service' href="#">Service</p>
                <p id='support' href="#">Support</p>
                <p id='about' href="#">About</p>
                <p id='demo' href="#">Demo</p>
                <p id='why' href="#">Why NexosFlow</p>
            </div>
        </div>
            )
    }
}
