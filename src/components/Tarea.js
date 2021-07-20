import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './Tarea.css';

class Tarea extends Component {
    
    StyleCompleted()
    {
        return{
            fontSize: '20px',
            color: this.props.tarea.done ? 'gray' : 'black',
            textDecoration: this.props.tarea.done ? 'line-through' : 'none'
        }
    }
    
    render() {

        const {tarea} = this.props;

        return <div style={this.StyleCompleted()}>
                 {tarea.id} -- 
                 {tarea.title} - 
                 {tarea.descripcion} 
                 {tarea.done} 
                <input type="checkbox" onChange={this.props.checkDone.bind(this, tarea.id)}/>
                <button style={btnDelete} onClick={this.props.deleteTarea.bind(this, tarea.id)}>x</button>
        </div>
    }
}

const btnDelete = {
    fontSize: '18px',
    background :'#ea2027',
    color:'#fff',
    border:'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

Tarea.propTypes ={
    tarea : PropTypes.object.isRequired
}

export default Tarea;