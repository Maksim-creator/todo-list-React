import React, { Component } from 'react';

import Header from '../header';
import SearchPanel from '../searchPanel';
import PostFilter from '../postFilter';
import ToDoList from '../todoList';
import AddItem from '../addItem';
import { v4 as uuidv4 } from 'uuid';

import './app.css';

export default class App extends Component {
    state = {
        todos: [
            {label: 'Play game', important: false, done: false, id: uuidv4()},
            {label: 'Do math', important: false, done: false, id: uuidv4()},
            {label: 'Learn react', important: false, done: false, id: uuidv4()}
        ],
        value: '',
        filter: 'all'
    }
    

    onToggleDone = (id) => {
        const index = this.state.todos.findIndex((el) => el.id === id);
        const newArray = this.state.todos.slice();
        newArray[index].done = !newArray[index].done;
        this.setState({
            todos: newArray
        })

       console.log(this.state.todos);
    }

    onToggleImportant = (id) => {
        const index = this.state.todos.findIndex((el) => el.id === id);
        const newArray = this.state.todos.slice();
        newArray[index].important = !newArray[index].important;
        this.setState({
            todos: newArray
        })
    }

    onDelete = (id) => {
        this.setState(state => {
            const index = state.todos.findIndex((el) => el.id === id);
            const newArray = state.todos.slice();
            const before = newArray.slice(0, index);
            const after = newArray.slice(index + 1);

            const arr = [...before, ...after];

            return {
                todos: arr
            }
        })
    }

    createNewItem(label){
        return {
            label: label,
            important: false,
            done: false,
            id: uuidv4()
        }
    }

    onAdd = (label) => {
        if(label.length === 0){
            return
        }
        
        const newItem = this.createNewItem(label);
        this.setState(({todos}) => {
            const newArray = todos.slice();
            newArray.push(newItem);
            return {
                todos: newArray
            }
        })
    }

    search = (items, value) => {
        if(value.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(value) > -1
        })
    }

    onSearchChange = (value) => {
        this.setState({
            value
        })
    }

    onFilterSelect = (name) => {
        this.setState({
            filter: name
        })
    }

    filter = (items, filterState) => {
        switch (filterState) {
            case 'all':
                return items;
            case 'done':
                return items.filter(item => item.done);
            case 'active':
                return items.filter(item => !item.done);
            default:
                return items;
        }
    }

    render (){
        const {todos, value, filter} = this.state;

        const done = todos.filter((item) => item.done).length;
        const todo = todos.length - done;
        const visibleItems = this.filter(this.search(todos, value), filter);

        return (
            <div className="container" >
                <Header
                    doneItem={done}
                    todoItem={todo}/>
                <div className="top-panel row d-flex mt-4">
                    <SearchPanel 
                        onSearchChange={this.onSearchChange}/>
                    <PostFilter
                        filterState={this.state.filter} 
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <ToDoList 
                    data={visibleItems}
                    onToggleDone={this.onToggleDone} 
                    onToggleImportant={this.onToggleImportant}
                    onDelete={this.onDelete}/>
                <AddItem
                    onAdd={this.onAdd} />
            </div>
            
        )
    }
}
