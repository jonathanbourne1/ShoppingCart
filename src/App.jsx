import React, { Component } from 'react';
import './bootstrap.min.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Barra from './Components/Barra'

class App extends Component {
  state = {  }
  render(
  
  ) { 
    return ( 
     <div className="todo">
       <Header/>
       <Hero/>
       <Barra/>
       
     </div>
     );
  }
}
 
export default App;