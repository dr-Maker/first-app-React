
import React, { Component } from 'react';
import './App.css';

import tareas from './sample/task.json';

import Tareas from './components/Tareas';

class App extends Component{

state = {
  tareas : tareas
}

  render() {
    return <div>
       <Tareas tareas={this.state.tareas} />
    </div>
  }
}


export default App;
