import React from "react";
import './button.css'

export const Button = (props) => {
    return (
        <div>
            <button>{props.function}</button>
        </div>
    )
}