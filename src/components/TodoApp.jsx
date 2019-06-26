import React from "react";

import AddTodo from "./AddTodo.jsx";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "./Footer.jsx";

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;
