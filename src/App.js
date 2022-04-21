import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Destination from './components/pages/Destination';
import Contactus from './components/pages/Contactus';
import Explore from './components/pages/Explore';
import NorthIndia from './components/pages/subpages/NorthIndia';
import SouthIndia from './components/pages/subpages/SouthIndia';
import EastIndia from './components/pages/subpages/EastIndia';
import WestIndia from './components/pages/subpages/WestIndia';
import CentralIndia from './components/pages/subpages/CentralIndia';
import UNT from './components/pages/subpages/UNT';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Router>
         <Navbar/>
         <Switch>
           <Route path ='/' exact component={Home}/>
           <Route path='/destination' exact component={Destination}/>
           <Route path='/contact-us' exact component={Contactus}/>
           <Route path='/explore' exact component={Explore}/>
           <Route path='/north-india' exact component={NorthIndia}/>
           <Route path='/south-india' exact component={SouthIndia}/>
           <Route path='/east-india' exact component={EastIndia}/>
           <Route path='/west-india' exact component={WestIndia}/>
           <Route path='/central-india' exact component={CentralIndia}/>
           <Route path='/union-territories' exact component={UNT}/>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
