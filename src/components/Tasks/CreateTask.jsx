import React, { useState } from "react";
import Task from　"./Task";

export default function CreateTask() {
    const [task, setTask] = useState({title: "", description: ""});
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        const {target : {name, value}} = e;
        setTask((prevTask) => ({
            ...prevTask,
            [name]: value
        }));
    }

    const addTask = (e) => {
        e.preventDefault();
        if (task.title) {
            setTasks((prevTasks) => {
                return [...prevTasks, task];
            })
        }
        setTask({title: "", description: ""});
    }

    return ( 
    <div>
        <form onSubmit={addTask}>
            <input name="title" placeholder="Task Title" value={task.title} onChange={handleChange} />
            <textarea name="description" placeholder="Write a description..." value={task.description} onChange={handleChange} />
            <button>Add</button>
        </form>
        {tasks && tasks.map((currentTask, index) => {
            return (
                <Task key={index} title={currentTask.title} description={currentTask.description} />
            )
        })}
       
    </div>
    )
}