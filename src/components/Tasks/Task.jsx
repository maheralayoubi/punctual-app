import classes from "./task.module.css";

export default function Task(props) {
  const provided = props.provided;
  let border = "";

  if (props.isDragging) {
    border = classes.dashed;
  } else {
    border = classes.solid;
  }

  const assignedClasses = [classes.task, border];

  return (
    <div
      className={assignedClasses.join(" ")}
      ref={props.provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <h3 className={classes.task__heading}>{props.title}</h3>
    </div>
  );
}
