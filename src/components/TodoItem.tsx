// Import dependencies
import React, { useState } from "react";

// Import interfaces
import { TodoItemInterface } from "./../modules/interfaces";

// TodoItem component
const TodoItem = (props: TodoItemInterface) => {
   const [todoText, setTodoText] = useState<string>("");

   const onChangeTodoText = (e: React.FormEvent<HTMLInputElement>) => {
      //setTodoText(e.currentTarget.value);
      props.todo.todo = e.currentTarget.value;
   };

   return (
      <div className="todo-item">
         <div onClick={() => props.handleTodoComplete(props.todo.id)}>
            {props.todo.isCompleted ? (
               <span className="todo-item-checked">✔</span>
            ) : (
               <span className="todo-item-unchecked" />
            )}
         </div>

         <div className="todo-item-input-wrapper">
            <input
               value={props.todo.todo}
               onBlur={props.handleTodoBlur}
               onChange={onChangeTodoText}
               // onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
               //    props.handleTodoUpdate(event, props.todo.id)
               // }
            />
         </div>

         <div className="item-update">
            <button
               onClick={() => props.handleTodoUpdate(props.todo.id, todoText)}
            >
               수정
            </button>
         </div>

         <div className="item-remove">
            <button onClick={() => props.handleTodoRemove(props.todo.id)}>
               삭제
            </button>
         </div>
      </div>
   );
};

export default TodoItem;
