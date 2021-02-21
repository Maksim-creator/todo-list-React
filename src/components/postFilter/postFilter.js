import React, { Component } from 'react';

export default class PostFilter extends Component {
    buttons = [
        {name:'all', label:'All'},
        {name:'active', label:'Active'},
        {name:'done', label: 'Done'}
    ]
            
    render() {
        const {filterState, onFilterSelect} = this.props;
    
        const btns = this.buttons.map(({name,label}) => {
            const clazzName = filterState === name ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button key={name}
                        className={`btn ${clazzName}`}
                        onClick={() => onFilterSelect(name)}>{label}</button>
            )
        })

        return (
            <div className="postFilter">
                {btns}
            </div>
        );
    }
}