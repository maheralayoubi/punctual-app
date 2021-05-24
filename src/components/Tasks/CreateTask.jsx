import React, { useState } from "react";
import Task from "./Task";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const List = styled.div`
  border: 1px
    ${(props) => (props.isDraggingOver ? "dashed #000" : "solid #ddd")};
  background: #fff;
  padding: 0.5rem 0.5rem 0;
  border-radius: 3px;
  flex: 0 0 150px;
  font-family: sans-serif;
`;

const Kiosk = styled(List)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
`;

const Item = styled.div`
  display: flex;
  user-select: none;
  padding: 0.5rem;
  margin: 0 0 0.5rem 0;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 1.5;
  border-radius: 3px;
  background: #fff;
  border: 1px ${(props) => (props.isDragging ? "dashed #4099ff" : "solid #ddd")};
`;

const Clone = styled(Item)`
  ~ div {
    transform: none !important;
  }
`;

const TaskInput = styled.div`
  text-align: center;
`;

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
    <React.Fragment>
      <TaskInput>
        <form onSubmit={addTask}>
          <input
            name="content"
            placeholder="Task Title"
            value={task.content}
            onChange={handleChange}
          />
          <button>Add</button>
        </form>
      </TaskInput>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="TASKS" isDropDisabled={true}>
          {(provided, snapshot) => (
            <Kiosk
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
                            <Clone>{currentTask.content}</Clone>
                          )}
                        </React.Fragment>
                      )}
                    </Draggable>
                  );
                })}
              {provided.placeholder}
            </Kiosk>
          )}
        </Droppable>
      </DragDropContext>
    </React.Fragment>
  );
}
