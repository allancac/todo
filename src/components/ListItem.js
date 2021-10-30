import { React } from 'react';

const ListItem = (props) => {
  
  return (
      <li key={props.item.key}>
        <input 
        onChange={(evento)=>props.check(evento,props.item)}
        type='checkbox' 
        checked={props.item.isCompleted}/>
        <span>{props.item.taskTitle}</span>
      </li>

  )
}

export default ListItem;