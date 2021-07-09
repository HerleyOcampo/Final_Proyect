import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './components/Home.jsx';
import { Ofertas } from './components/Ofertas';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/ofertas">
          <Ofertas/>
        </Route>
        <Route path="/perfil">
          Esta es la pagina de perfil
        </Route>
        <Route path="/registrate">
          Esta es la pagina de registrate
        </Route>
        <Route path="/sesion">
          Esta es la pagina de sesion
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
