import classes from "./task.module.css";

import React from 'react';

export default function TaskInput(props) {
  return (
    <div className={classes.taskform}>
      <h1 className={classes.taskform__heading_primary}> {props.formTitle} </h1>
      <form onSubmit={props.addTask}>
        <input
          className={classes.taskform__input}
          autoComplete="off"
          name="content"
          placeholder="Task Title"
          value={props.task}
          onChange={(e) => props.setTask(e.target.value)}
        />
        <button className={classes.taskform__button}>
          <svg className={classes.taskform__icon}>
            <use xlinkHref="#icon-plus"></use>
          </svg>
        </button>
      </form>
    </div>
  );
}
