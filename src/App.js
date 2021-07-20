
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import tareasJson from './sample/task.json';
import Tareas from './components/Tareas';
import TareaForm from './components/TareaForm';
import Post from './components/Posts'

class App extends Component{

state = {
  tareas : tareasJson
}

addTarea = (title, description) => {
  const newTarea = {
    title : title,
    description : description,
    id: this.state.tareas.length
  }
  this.setState({
    tareas:[...this.state.tareas, newTarea]
  })
}

deleteTarea = (id) =>{
  const nuevasTareas = this.state.tareas.filter(tarea => tarea.id !== id);
  this.setState({tareas: nuevasTareas})
}

checkDone = (id) =>{
 const nuevasTareas = this.state.tareas.map(tarea => {
      if(tarea.id === id){
        tarea.done = ! tarea.done
      }
      return tarea;
   });
   this.setState({tareas: nuevasTareas})
  }

  render() {
    return <div>
    <Router>
      <Link to="/">Tareas</Link>
      <br/>
      <Link to="/post">Publicaciones</Link>
        <Route exact path="/" render={()=>{
        return <div>
            <TareaForm addTarea={this.addTarea}/>
            <Tareas tareas={this.state.tareas} deleteTarea={this.deleteTarea} checkDone={this.checkDone}/>
        </div>
          }}>
        </Route>

        <Route path="/post" component={Post} />
    </Router>
      

    </div>
  }
}


export default App;

