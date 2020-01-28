import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationContainer from "./navigation/navigation-container";
import Inicio from "./paginas/inicio";
import Contenido from "./paginas/contenido";
import ReactPlayer from './paginas/inicio';

export default class App extends Component {
  render() {
    return (
      // <div>
      //   <ReactPlayer
      //     url='https://studio.youtube.com/video/i1hYRmq2mGI/edit'
      //     className='react-player'
      //     playing
      //     width='100%'
      //     height='100%'
      //   />
      // </div>
    <div className="container">
      <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Inicio} />
                 <Route path="/contenido" component={Contenido} /> } 
          
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

