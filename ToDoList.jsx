import React from "react";

const ToDoList = (props)=>{

    return( <>
    <div className="todo_style">
    <li>{props.text}
    <i className="fa fa-times ff" aria-hidden="true" 
    onClick={()=>{props.onSelect(props.id)}}
    style={{cursor:"pointer" ,float:"right"}}>    
     </i>
    </li>
    </div>
    
    </>
    );
}

export default ToDoList;