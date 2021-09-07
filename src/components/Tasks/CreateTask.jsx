import React, { useState } from "react";
import Task from "./Task";
import classes from "./task.module.css";
import "./task.module.css";
import _ from "lodash";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 } from "uuid";

const action1 = {
  id: v4(),
  name: "Study React",
};

const action2 = {
  id: v4(),
  name: "Fly a drone",
};

export default function CreateTask() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState({
    //creating 3 columns
    todo: {
      title: "todo",
      actions: [action1, action2], //temporary data valuesa
    },
    "in-progress": {
      title: "in-progress",
      actions: [],
    },
    done: {
      title: "done",
      actions: [],
    },
  });

  const addTask = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return {
        ...prev,
        todo: {
          title: "todo",
          actions: [{ id: v4(), name: task }, ...prev.todo.actions],
        },
      };
    });
    setTask("");
  };

  const onDragEnd = (result) => {
    const { destination, draggableId, source } = result;
    if (!destination) {
      console.log("No destincation is specified!!");
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      console.log("Dropped On Myself!!");
      return;
    }

    // Creating a copy of item before removing it from state
    const itemCopy = { ...tasks[source.droppableId].actions[source.index] };

    setTasks((prev) => {
      prev = { ...prev };

      // if it is not todo column then remove it
      if (source.droppableId !== "todo") {
        // Remove from previous items array
        prev[source.droppableId].actions.splice(source.index, 1);
      } else {
        itemCopy.id = v4();
      }

      // Adding to new items array location
      prev[destination.droppableId].actions.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.taskform}>
        <h1 className={classes.taskform__heading_primary}> Add new task </h1>
        <form onSubmit={addTask}>
          <input
            className={classes.taskform__input}
            autoComplete="off"
            name="content"
            placeholder="Task Title"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className={classes.taskform__button}>
            <svg className={classes.taskform__icon}>
              <use xlinkHref="#icon-plus"></use>
            </svg>
          </button>
        </form>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        {_.map(tasks, (data, key) => {
          return (
            <Droppable
              droppableId={data.title}
              key={key}
              isDropDisabled={data.title === "todo" ? true : false}
            >
              {(provided, snapshot) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    key={data.title}
                    className={classes.taskbar}
                  >
                    {data.actions.map((currentAction, index) => {
                      return (
                        <Draggable
                          key={currentAction.id}
                          index={index}
                          draggableId={currentAction.id}
                        >
                          {(provided, snapshot) => {
                            return (
                              <React.Fragment>
                                <Task
                                  title={currentAction.name}
                                  provided={provided}
                                  snapshot={snapshot}
                                />
                                {snapshot.isDragging &&
                                  data.title === "todo" && (
                                    <div className={classes.clone}>
                                      {currentAction.name}
                                    </div>
                                  )}
                              </React.Fragment>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
}
