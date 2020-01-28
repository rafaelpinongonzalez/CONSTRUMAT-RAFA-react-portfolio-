import React from "react";
import Login from '../paginas/imagenes/Login.png'
import ReactPlayer from 'react-player'

export default function() {
  return (
  <div>
    
    <div className="contenedor-inicio">
      <div>
      <h1>CONSTRUMAT</h1>
      
      </div>
      <img class="imagen" src={Login} alt=""/>
      </div>
      
      <div className="link-clima">
      <a href="https://www.meteored.mx/colonia-le-baron/por-hora">ver clima</a>
      </div>
      <div className="link-facebook">
      <a href="https://www.facebook.com/rafael.pinongonzalez">fecebook de pagina</a>
      </div>
    </div>  
  );
}
