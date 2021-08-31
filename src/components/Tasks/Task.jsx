// import styled from "styled-components";
import classes from "./task.module.css"

// const Item = styled.div`
//   display: flex;
//   user-select: none;
//   padding: 0.5rem;
//   margin: 0 0 0.5rem 0;
//   align-items: flex-start;
//   align-content: flex-start;
//   line-height: 1.5;
//   border-radius: 3px;
//   background: #fff;
//   border: 1px ${(props) => (props.isDragging ? "dashed #4099ff" : "solid #ddd")};
// `;



export default function Task(props) {
  const provided = props.provided;


	
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  let currentTime ={time:dateTime};

  const newTime = {...currentTime};


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
      <p className= {classes.task__time}> Task time assigned: {newTime.time}</p>

    </div>
  );
}
