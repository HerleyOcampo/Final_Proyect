import './App.css';
// import RequestService from './config/index'
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './components/Home.jsx';
import { Ofertas } from './components/Ofertas';

function App() {
  // const [user, setUsers] = useState([]);
  // //const [data, setData] = useState([]);

  // const getUsers = async () => {
  //   const { data } = await RequestService.get('api/task/');
  //   console.log(data);
  //   //const {users} = data;
  //   setUsers(data);
  //   //setData(user);

  // };
  // //console.log(user._id);
  // useEffect(() => {
  //   getUsers();
  // }, []);

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
          {/* <div className="App container-fluid">
          Esta es la pagina de inicio
            {user.map((item) => (
              <h1 key={item.id}>
                {item.description}
              </h1>
            ))} 
            </div>*/}
            
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
