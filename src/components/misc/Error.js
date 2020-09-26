import React from 'react';
import './misc.css';

export default function Error(props) {
    return (
        <div className="error">
            <span>{props.message}</span>
            <button onClick={props.clearError}>x</button>
        </div>
    )
}
