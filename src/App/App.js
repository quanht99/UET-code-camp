import React, { Component } from 'react';
import "../MyStyle/MyCss.css";
import Header from "./Header";
import TodoForm from "./TodoForm";
import Todolist from "./Todolist";
import {fetchTodos, createTodo,deleteTodos,toggleTodo} from "../service/APIService";
import LoginPage from "./Login";


class App extends Component {

    state ={
        todos: []
    };

    componentDidMount() {
        this.fetchListTodos();
    }

    fetchListTodos(){
        fetchTodos().then(object => {
            const {data, success} = object;

            if(success){
                this.setState({
                    todos: data
                });
            }
        });
    }

    render() {

        const todos = this.state;
        return (
            <div>
                <Header/>
                <TodoForm onCreate={this.CreateNewLi.bind(this)}/>
                <Todolist todos={this.state.todos}
                          onnChange={this.ChangeTrueFalse.bind(this)}
                          onDelete={this.DeleteLi.bind(this)}/>
            </div>
        );
    }
    CreateNewLi(text){
        createTodo(text)
            .then(object => {
                this.fetchListTodos();
            });
    }

    DeleteLi(id){
        deleteTodos(id)
            .then(() => {
                this.fetchListTodos();
            })
    }
    ChangeTrueFalse(id){
        toggleTodo(id)
            .then(() => {
                this.fetchListTodos();
            })
    }
}


export default App;
