import React, {Component} from 'react';


class Todo extends Component {
    render() {
        const {title, completed} = this.props.data;
        return (
            <li className={completed ? "completed" : ""}>
                <span onClick={this.ChangeTF.bind(this)}>{title}</span>
                <span onClick={this.removeLi.bind(this)}
                      className="close">X</span>
            </li>
        );
    }

    ChangeTF() {
        const {data}=this.props;

        this.props.onChange(data._id);
    }


    removeLi(){
        const {data} = this.props;

        this.props.onRemove(data._id);
    }
}

export default Todo;
