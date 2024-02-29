import React from "react";
import './header.css';

export const Header = (props) => {
    return (
        <div>
            <h2>{props.heading}</h2>
            <h1>{props.score}</h1>
        </div>
    )
}