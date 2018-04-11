import React, {Component} from 'react';


class TodoForm extends Component {
    state = {
        text:''
    }
    render() {
        const {text}=this.state;
        return (
            <div className="header">
                <form className="create">
                    <input  type ="text"
                            onChange={this.ChangeText.bind(this)}
                            value={text} id="inputAdd" placeholder="Title..."/>
                    <button onClick={this._CreateNewLi.bind(this)}
                            type="button"  id="buttonAdd" >Add</button>
                </form>
            </div>
        );
    }

    ChangeText(e){
        const {value}=e.target;

        this.setState({
            text:value
        });
    }

    _CreateNewLi(){
        const {text}=this.state;
    this.props.onCreate(text);

    this.setState({
        text:''
    });
}

}

export default TodoForm;
