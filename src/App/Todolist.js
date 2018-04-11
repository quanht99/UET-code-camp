import React, {Component} from 'react';
import Todo from "./Todo";


class TodoList extends Component {

    render() {
        const {todos} = this.props;

        return (
            <div className="main">
                <ul id="list">
                    {
                       todos.map((data, index) => {
                           return (
                               <Todo onChange={this.Change.bind(this)}
                                     onRemove={this.RemoveLi.bind(this)} id={index} key={index} data={data}/>
                           );
                       })
                    }
                </ul>
            </div>
        );
    }
    Change(id){
        this.props.onnChange(id);
    }
    RemoveLi(id){
        this.props.onDelete(id);
    }
}

export default TodoList;
