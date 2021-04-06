import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './Tarea.css';

class Tarea extends Component {
    render() {

        const {tarea} = this.props;

        return <div className="red">
                 {tarea.id} -- 
                 {tarea.title} - 
                 {tarea.descripcion} 
                <input type="checkbox" />
                <button>x</button>
        </div>
    }
}

Tarea.propTypes ={
    tarea : PropTypes.object.isRequired
}

export default Tarea;