import React from "react";

export default function CreateTask(props) {
    return ( 
    <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
    )
}