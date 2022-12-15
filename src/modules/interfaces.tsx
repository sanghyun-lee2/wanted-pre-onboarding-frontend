// Todo interface
export interface TodoInterface {
   id: string;
   todo: string;
   isCompleted: boolean;
   userId: string;
}

// Todo form interface
export interface TodoFormInterface {
   todos: TodoInterface[];
   handleTodoCreate: (todo: TodoInterface) => void;
}

// Todo list interface
export interface TodoListInterface {
   handleTodoUpdate: (id: string, text: string) => void;
   handleTodoRemove: (id: string) => void;
   handleTodoComplete: (id: string) => void;
   handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
   todos: TodoInterface[];
}

// Todo item interface
export interface TodoItemInterface {
   handleTodoUpdate: (id: string, text: string) => void;
   handleTodoRemove: (id: string) => void;
   handleTodoComplete: (id: string) => void;
   handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
   todo: TodoInterface;
}
