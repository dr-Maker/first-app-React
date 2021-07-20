import React, { Component} from 'react';

//export default class TareaForm extends Component
class TareaForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = (e) =>{
        
        this.props.addTarea(this.state.title, this.state.description);
        e.preventDefault();
       
    }

    onChange =(e) => {
              this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){

    return(
        <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Escribe una tarea" name="title" onChange={this.onChange} value={this.state.title} />
            <br/>
            <br/>
            <textarea placeholder="Escribe una descripcion de la tarea" name="description" onChange={this.onChange} value={this.state.description}></textarea>
            <br/>
            <br/>
            <input type="submit" value="Guardar tarea"/>
        </form>
    )
}

}

export default TareaForm;