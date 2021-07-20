import React, { Component } from 'react';
import Tarea from './Tarea';
//import PropTypes from 'prop-types';

class Tareas extends Component { 
    render(){
        return this.props.tareas.map(tarea => <Tarea tarea={tarea} key={tarea.id} deleteTarea={this.props.deleteTarea} checkDone={this.props.checkDone} /> )

    }
}
/*
Tareas.propTypes = {
    tarea : PropTypes.array.isRequired

}
*/
export default Tareas;