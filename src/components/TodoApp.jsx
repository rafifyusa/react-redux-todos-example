import React from "react";

import AddTodo from "./AddTodo.jsx";
import TodoList from "./TodoList.jsx";
import Footer from "./Footer.jsx";

const TodoApp = ({ match }) => (
  <div>
    <AddTodo />
    <TodoList filter={match.params.filter || "all"} />
    <Footer />
  </div>
);

export default TodoApp;
