import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Todo from "./components/Todo";
import NotFound from "./components/NotFound";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Main />}></Route>
               <Route path="/todo" element={<Todo />}></Route>
               <Route path="*" element={<NotFound />}></Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
