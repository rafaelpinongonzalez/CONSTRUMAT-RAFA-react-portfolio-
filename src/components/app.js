import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationContainer from "./navigation/navigation-container";
import Inicio from "./paginas/inicio";
import Contenido from "./paginas/contenido";
export default class App extends Component {
  render() {
    return (
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

