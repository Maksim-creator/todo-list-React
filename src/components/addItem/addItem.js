import React, { Component } from 'react';

export default class AddItem extends Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })  
    }

    clearInput = () => {
        this.setState({
            value: ''
        })
    }

    render() {
        const {onAdd} = this.props;
        const {value} = this.state;

        return (
            <div className="addItem d-flex mt-2">
                <input className="form-control" 
                       placeholder="Enter add value"
                       value={this.state.value}
                       onChange={this.handleChange}/>
                <button className="btn btn-outline-info"
                        onClick={() => {
                            onAdd(value);
                            this.clearInput()
                        }}>Add</button>
            </div>
        );
    }
}