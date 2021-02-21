import React, { Component } from 'react';
import './todoListItem.css';

export default class ToDoListItem extends Component {
    render() {
        const {label, onToggleDone,done, onToggleImportant, important, onDelete} = this.props;
        
        let classNames = 'todo-list-item';

        if(done){
            classNames += ' done';
        }
        console.log(important);
        if(important === true){
            classNames += ' important';
        }

        const style = {
            backgroundColor: important ? 'gold' : 'white'
        }

        return (
            <span className={classNames}>
                <span onClick={onToggleDone}>
                    {label}
                </span>
                <button type="button" className="btn btn-sm float-right"><i className="far fa-heart" /></button>  
                <button type="button" 
                        style={style}
                        className="btn btn-sm float-right"
                        onClick={onToggleImportant}><i className="far fa-star" />
                </button>
                <button type="button" 
                        onClick={onDelete}
                        className="btn btn-sm float-right"><i className="far fa-trash-alt" /></button>
            </span>
        );
    }
}