import React, { useState } from "react";
import "./index.css"
import "./responsive.css"
import ToDoList from "./ToDoList";
const App = () => {

   const [inputList, setinputList] = useState("");
   const [item, setitem] = useState([]);

   const itemEvent = (event) => {
      setinputList(event.target.value)
   };

   let a = '😠';

   const listofitem = () => {
      setitem((oldItem)=>{

         if(inputList===""){
           return alert(`Please ${a} Enter Message in To-Do List`);
         }
         else{
            return [...oldItem,inputList];
         }
         
      });
      setinputList("");
   };

   const deleteItem = (id)=>{
      setitem((old)=>{
      return old.filter((aeeEle,index)=>{
         return index!==id
      })
   })
}

   return (
      <>
         <div className="main_div">

            <div className="center_div">
               <br />
               <h1>To-Do List</h1>
               <br />
               <input
               type="text" 
               placeholder="Add a Items" 
               onChange={itemEvent} 
               value={inputList}
               />
               <button id="plus"><span id="sp" onClick={listofitem}>+</span></button>
               <div className="ole">
                  <ol id="ol">

            {item.map((itemval,index)=>{

               return(
                  <ToDoList key={index} 
                  text={itemval}
                  id = {index}   
                  onSelect = {deleteItem}
                  />
               )
            })
            }
                  </ol>
               </div>
            </div>
         </div>

      </>
   )
}

export default App;