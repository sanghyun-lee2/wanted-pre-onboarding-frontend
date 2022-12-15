import API from "../api/api";

// Import interfaces
import { TodoInterface } from "./../modules/interfaces";
import authHeader from "./authService";

export const todoCreateService = async (todo: TodoInterface) => {
   API.post(
      "/todos",
      {
         id: todo.id,
         todo: todo.todo,
         isCompleted: todo.isCompleted,
         userId: todo.userId,
      },
      {
         headers: authHeader(),
      }
   )
      .then((res) => {
         //window.alert("Todo 생성 성공");
      })
      .catch((err) => window.alert("Todo 생성 실패"));
};

export const todoGetService = async () => {
   return API.get<TodoInterface[]>("/todos", { headers: authHeader() }).then(
      (res) => {
         return res.data;
      }
   );
};

export const todoUpdateService = async (todo: TodoInterface) => {
   API.put(
      "/todos/" + todo.id,
      {
         todo: todo.todo,
         isCompleted: todo.isCompleted,
      },
      {
         headers: authHeader(),
      }
   )
      .then((res) => {
         //window.alert("Todo 수정 성공");
      })
      .catch((err) => window.alert("Todo 수정 실패"));
};

export const todoDelService = async (id: string) => {
   return API.delete("/todos/" + id, { headers: authHeader() }).then((res) => {
      return res.data;
   });
};
