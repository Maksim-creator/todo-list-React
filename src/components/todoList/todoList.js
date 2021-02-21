import React, { Component } from 'react';
import ToDoListItem from '../todoListItem';

export default class ToDoList extends Component {
    render() {
        const {data, onToggleDone, onToggleImportant, onDelete} = this.props;
        
        const todos =  data.map(({label, id, done, important }) => {
            
            return (
                <li key={id} className="list-group-item">
                    <ToDoListItem 
                        done={done}
                        label={label}
                        important={important}
                        onToggleDone={() => onToggleDone(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onDelete={() => onDelete(id)}
                    />
                </li>
            );
        });

        return (
            <ul className="list-group">
                {todos}
            </ul>
        )
    }
}