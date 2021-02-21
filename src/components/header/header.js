import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render() {
        const {doneItem, todoItem} = this.props;

        return (
            <div className="header d-flex justify-content-between align-items-end">
                <h1 className="name">ToDo</h1>
                <h3 className="tasks">{doneItem} done, {todoItem} to do</h3>
            </div>
        );
    }
}