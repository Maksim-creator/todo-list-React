import React, { Component } from 'react';
import './searchPanel.css'

export default class SearchPanel extends Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        let value = event.target.value;
    
        this.setState({
            value
        })
        this.props.onSearchChange(value)
    }
    
    render() {

        return (
            <div className="search">
                <input placeholder="Serch post" 
                       className="form-control"
                       value={this.state.value}
                       onChange={this.handleChange}/>
            </div>
        );
    }
}