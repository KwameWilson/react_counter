import React from 'react';
import './button.css'

export const Button = (props) => {

    return (
        <div>
            <button onClick={props.onclick}>{props.action}</button>
        </div>
    )
}