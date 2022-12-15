// Import dependencies
import * as React from "react";
import shortid from "shortid";

// Import interfaces
import { TodoInterface, TodoFormInterface } from "./../modules/interfaces";

// Todo form component
const TodoForm = (props: TodoFormInterface) => {
   // Create ref for form input
   const inputRef = React.useRef<HTMLInputElement>(null);
   // Create form state
   const [formState, setFormState] = React.useState("");

   // Handle todo input change
   function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
      // Update form state with the text from input
      setFormState(event.target.value);
   }

   const bnClickTodoCreate = async () => {
      const newTodo: TodoInterface = {
         id: shortid.generate(),
         todo: formState,
         isCompleted: false,
         userId: "",
      };

      try {
         props.handleTodoCreate(newTodo);
      } catch {
         console.log("error");
      }
   };

   return (
      <div className="todo-form">
         <input
            ref={inputRef}
            type="text"
            placeholder="Enter new todo"
            onChange={(event) => handleInputChange(event)}
         />
         <button onClick={bnClickTodoCreate}>추가</button>
      </div>
   );
};

export default TodoForm;
