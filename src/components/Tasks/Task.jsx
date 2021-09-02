// import styled from "styled-components";
import classes from "./task.module.css"



export default function Task(props) {
  const provided = props.provided;


	
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;


  let border = '';
  
 
  if(props.isDragging){
    border = classes.dashed;  
  }
  else{ 
    border = classes.solid;
  }
  
  const assignedClasses = [classes.task , border];


 


  return (
    <div 
      className={assignedClasses.join(' ')}
      ref={props.provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <h3 className = {classes.task__heading}>{props.title}</h3>
      <p className= {classes.task__time}> Task time assigned: {dateTime}</p>

    </div>
  );
}
