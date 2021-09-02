import React, { useState } from "react";
import Task from "./Task";
import styled from "styled-components";
import classes from "./task.module.css";
import "./task.module.css";


import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";






export default function CreateTask() {
  const [task, setTask] = useState({ id: "", content: "" });
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setTask((prevTask) => ({
      ...prevTask,
      id: uuidv4(),
      [name]: value,
    }));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task.content) {
      setTasks((prevTasks) => {
        return [...prevTasks, task];
      });
    }
    setTask({ id: uuidv4(), content: "" });
  };

  const onDragEnd = (result) => {
    console.log(result);
  };



  return (
    <div className = {classes.container}>
    <React.Fragment>
      <div  className= {classes.taskform} >
      <h1 className = {classes.taskform__heading_primary}> Add new task </h1>
        <form onSubmit={addTask}>
          <input
          className = {classes.taskform__input}
          autocomplete="off"
            name="content"
            placeholder="Task Title"
            value={task.content}
            onChange={handleChange}
          />
          <button 
          className = {classes.taskform__button}
          >
          <svg className={classes.taskform__icon}>
          <use xlinkHref="#icon-plus"></use>
          </svg>
          </button>
        </form>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="TASKS" isDropDisabled={true}>
          {(provided, snapshot) => (
            <sidebar
              className ={classes.taskbar}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {tasks &&
                tasks.map((currentTask, index) => {
                  return (
                    <Draggable
                      key={currentTask.id}
                      draggableId={currentTask.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <React.Fragment>
                          <Task
                            key={index}
                            title={currentTask.content}
                            provided={provided}
                            snapshot={snapshot}
                          />
                          {snapshot.isDragging && (
                            <div className = {classes.clone}>{currentTask.content}</div>
                          )}
                        </React.Fragment>
                      )}
                    </Draggable>
                  );
                })}
              {provided.placeholder}
            </sidebar>
          )}
        </Droppable>
      </DragDropContext>
    </React.Fragment>
    </div>
  );
}
